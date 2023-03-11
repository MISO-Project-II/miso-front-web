import {
  IResSetSession,
  ISession,
  ISetSession,
  ValueSession,
} from "./../../../../models/general/session.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { RESUME, START, STOP } from "src/constanst/data.constants";
import { StatusModel } from "src/models/local/status-model";
import { SessionService } from "src/services/general/session.service";
import { StatusService } from "src/services/local/status.service";
@Component({
  selector: "app-user-session",
  templateUrl: "./user-session.component.html",
  styleUrls: ["./user-session.component.scss"],
})
export class UserSessionComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public START: string = START;
  public STOP: string = STOP;
  public RESUME: string = RESUME;

  public formSession: FormGroup;
  public sessionData: ISession[];
  public sessionDataAvg: ISession[];

  public hour: number = 0;
  public min: number = 0;
  public sec: number = 0;
  public diffSessionHour: any;
  public diffSessionMin: any;
  public diffSessionSec: any;
  public timerRef: any;
  public isSession: boolean = false;
  public startText: string = START;
  public startSession: Date = new Date();
  public startSessionCont: number;
  public endSession: number | 0;
  public timerSession: number = 0;
  public timerSession2: any;
  public averageData: ISetSession;
  public false: boolean = false;
  constructor(
    private _statusService: StatusService,
    private _sessionService: SessionService
  ) {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
    this._initForm();
    this.sessionData = this._avgSessionValues();
    this._loadSession();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
    clearInterval(this.timerRef);
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSessionData$(): ValueSession[] {
    return this._statusService.getSessionData();
  }
  get getLastSessionData$(): ISetSession {
    return this._statusService.getLastSessionData();
  }
  get getSessionService$(): Observable<ISetSession> {
    return this._sessionService.getSession();
  }
  private _initForm(): void {
    this.formSession = new FormGroup({
      actualDate: new FormControl(new Date()),
      // dato: new FormControl(MockSessions[0]),
    });
  }

  public onSubmit(): void {}

  public startTimer() {
    this.isSession = !this.isSession;
    if (this.isSession) {
      this.startText = STOP;
      this.startSessionCont = Date.now() - this.timerSession;
      this.timerRef = setInterval(() => {
        this.endSession = Date.now();
        this.timerSession = this.endSession - this.startSessionCont;
        this.timerSession2 = this.secondsToString(
          Math.trunc(this.timerSession / 1000)
        );
        this.sessionData = this._avgSessionValues();
      }, 1000);
    } else {
      this.startText = RESUME;
      clearInterval(this.timerRef);
    }
  }
  private secondsToString(seconds: number | 0) {
    this.diffSessionHour = Math.floor(seconds / 3600);
    this.diffSessionHour =
      this.diffSessionHour < 10
        ? "0" + this.diffSessionHour
        : this.diffSessionHour;
    this.diffSessionMin = Math.floor((seconds / 60) % 60);
    this.diffSessionMin =
      this.diffSessionMin < 10
        ? "0" + this.diffSessionMin
        : this.diffSessionMin;
    this.diffSessionSec = seconds % 60;
    this.diffSessionSec =
      this.diffSessionSec < 10
        ? "0" + this.diffSessionSec
        : this.diffSessionSec;
    return (
      this.diffSessionHour +
      ":" +
      this.diffSessionMin +
      ":" +
      this.diffSessionSec
    );
  }

  public clearTimer() {
    this.isSession = false;
    this.startText = START;
    this.startSession = new Date();
    this.startSessionCont = Date.now();
    this.endSession = Date.now();
    this.averageData = {
      startSession: this.startSession.toISOString(),
      endSession: new Date(this.endSession).toISOString(),
      calories: this._generateKCalH(),
      values: this.getSessionData$,
    };
    this.timerSession = 0;
    this._callService(this.averageData);
    clearInterval(this.timerRef);
  }
  private getRandomInt(avg: number) {
    let min = avg - 5;
    let max = avg + 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  private _generateKCalH(): number {
    let kcalMin = this.getMET() * 0.0175 * this.getGeneralStatus$.weight;
    let KCalHour = kcalMin * 0.0175 * Math.trunc(this.timerSession / 1000);
    return Math.trunc(KCalHour);
    // Kcal. /min. =MET x 0,0175 x PESO (Kg.)
  }
  public getMET(): number {
    let min = 6; // Caminar rápido
    let max = 11; //Saltar la cuerda
    return Math.floor(Math.random() * (max - min + 1) + min);
    // Un MET equivale a 0,0175 Kcal. x Kg.-1. x min.-1.
  }

  private _avgSessionValues(): ISession[] {
    return this.getSessionData$.map((data: ValueSession) => {
      var thresholdsMin = data.value - 4;
      var thresholdsAvg = data.value;
      var thresholdsMax = data.value + 2;

      var avg = this.getRandomInt(data.value);
      return {
        type: "arch",
        value: avg,
        label: data.label,
        append: data.append,
        size: 250,
        min: data.min,
        max: data.max,
        cap: "butt",
        thick: 25,
        foregroundColor: "#f85716",
        backgroundColor: "#cbcbcb",
        prepend: avg > thresholdsMax ? "😨" : avg < thresholdsMin ? "😓" : "😁",
        duration: 100,
        thresholds: {
          [thresholdsMin]: { color: "#f85716" },
          [thresholdsAvg]: { color: "#f85716" },
          [thresholdsMax]: { color: "#f85716" },
        },
        markers: {
          [thresholdsAvg]: {
            color: "#f85716",
            type: "triangle",
            size: 8,
            label: "Prom (" + thresholdsAvg + ")",
            font: "12px arial",
          },
        },
        margin: 10,
        animate: false,
        arialabel: data.label,
        arialabelledby: data.label,
      };
    });
  }
  private _loadSession(): void {
    this.getSessionService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: ISetSession) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserSessionComponent - _loadSession - res : ",
            res
          );
          this._statusService.setLastSessionData(res!);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _callService(data: ISetSession): void {
    // XXX Actualizar envio de servicio Session
    // this._sessionService
    //   .postSession(data)
    //   .pipe(takeUntil(this._destroy$))
    //   .subscribe(
    //     (res: ISetSession) => {
    //       if (!!res) {
    // console.log('🚀 XXX - UserSessionComponent - _callService - data : ', data);
    this._statusService.setLastSessionData(data);
    //     }
    //     this._statusService.spinnerHide();
    //   },
    //   (err: any) => {
    //     console.error(err);
    //     this._statusService.spinnerHide();
    //   }
    // );
  }
}
