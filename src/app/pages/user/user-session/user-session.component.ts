import {
  ISession,
  ISetSession,
  ValueSession,
} from "./../../../../models/general/session.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { RESUME, START, STOP } from "src/constanst/data.constants";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";
import { MockSessions } from "src/test/general/session.mock";
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
  constructor(private _statusService: StatusService) {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
    this._initForm();
    this.sessionData = this._avgSessionValues();
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

  private _initForm(): void {
    this.formSession = new FormGroup({
      actualDate: new FormControl(new Date()),
      dato: new FormControl(MockSessions[0]),
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
    this.timerSession = 0;
    this.averageData = {
      startSession: this.startSession.toISOString(),
      endSession: new Date(this.endSession).toISOString(),
      calories: this.getRandomInt(1000), // XXX Validar de donde sacar calorias
      values: this.getSessionData$,
    };
    clearInterval(this.timerRef);
  }
  private getRandomInt(avg: number) {
    let min = avg - 5;
    let max = avg + 3;
    return Math.floor(Math.random() * (max - min + 1) + min);
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
}
