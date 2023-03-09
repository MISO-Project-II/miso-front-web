import {
  ISession,
  ISetSession,
  Value,
} from "./../../../../models/general/session.interface";
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import {
  NgxGaugeCap,
  NgxGaugeType,
  RESUME,
  START,
  STOP,
} from "src/constanst/data.constants";
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

  public counter: number;
  public diffSessionHour: number;
  public diffSessionMin: number;
  public diffSessionSec: number;
  public timerRef: any;
  public isSession: boolean = false;
  public startText: string = START;
  public startSession: Date = new Date();
  public endSession: Date = new Date();
  public averageData: ISetSession;
  constructor() {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
    this._initForm();
    this.getSessionData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
    clearInterval(this.timerRef);
  }
  private _initForm(): void {
    this.formSession = new FormGroup({
      actualDate: new FormControl(new Date()),
      dato: new FormControl(MockSessions[0]),
    });
  }
  get getHour() {
    return this.startSession.getHours() - this.endSession.getHours();
  }
  get getMin() {
    return this.startSession.getMinutes() - this.endSession.getMinutes();
  }
  get getSec() {
    return this.startSession.getSeconds() - this.endSession.getSeconds();
  }

  public onSubmit(): void {}

  public startTimer() {
    this.endSession = new Date();
    this.isSession = !this.isSession;
    if (this.isSession) {
      this.startText = STOP;
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
        this.getSessionData();
      }, 2000);
    } else {
      this.startText = RESUME;
      clearInterval(this.timerRef);
    }
  }

  public clearTimer() {
    this.isSession = false;
    this.startText = START;
    this.diffSessionHour =
      this.startSession.getHours() - this.endSession.getHours();
    this.diffSessionMin =
      this.startSession.getMinutes() - this.endSession.getMinutes();
    this.diffSessionSec =
      this.startSession.getSeconds() - this.endSession.getSeconds();
    this.counter = 0;
    this.averageData = {
      startSession: this.startSession + "",
      endSession: this.endSession + "",
      calories: this.getRandomInt(1000),
      values: this.mapSessionData(),
    };
    this.startSession = new Date();
    this.endSession = new Date();

    clearInterval(this.timerRef);
  }
  private getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  private mapSessionData(): Value[] {
    return this.sessionData.map((data: Value) => {
      return {
        value: data.value,
        label: data.label,
        append: data.append,
        min: data.min,
        max: data.max,
      };
    });
  }
  private getSessionData(): void {
    this.sessionData = [
      {
        type: "full",
        value: this.getRandomInt(100),
        label: "Velocidad1",
        append: "Km/h",
        size: 250,
        min: 0,
        max: 100,
        cap: "butt", // "round", "butt"
        thick: 30,
        foregroundColor: "#f85716",
        backgroundColor: "#bababa",
        prepend: "😀",
        duration: 1000,
        thresholds: {
          "10": { color: "#fffc97" },
          "50": { color: "#ceff97" },
          "80": { color: "#ff9797" },
        },
        markers: {
          "50": {
            color: "#f85716",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial",
          },
        },
        margin: 30,
        animate: false,
        arialabel: "Velocidad",
        arialabelledby: "Velocidad",
      },
      {
        type: "semi",
        value: this.getRandomInt(100),
        label: "Velocidad2",
        append: "Km/h",
        size: 250,
        min: 0,
        max: 100,
        cap: "butt", // "round", "butt"
        thick: 30,
        foregroundColor: "#f85716",
        backgroundColor: "#bababa",
        prepend: "😀",
        duration: 100,
        thresholds: {
          "10": { color: "#fffc97" },
          "50": { color: "#ceff97" },
          "80": { color: "#ff9797" },
        },
        markers: {
          "50": {
            color: "#f85716",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial",
          },
        },
        margin: 30,
        animate: true,
        arialabel: "Velocidad",
        arialabelledby: "Velocidad",
      },
      {
        type: "arch",
        value: this.getRandomInt(100),
        label: "Velocidad3",
        append: "Km/h",
        size: 250,
        min: 0,
        max: 100,
        cap: "butt", // "round", "butt"
        thick: 30,
        foregroundColor: "#f85716",
        backgroundColor: "#bababa",
        prepend: "😀",
        duration: 1000,
        thresholds: {
          "10": { color: "#fffc97" },
          "50": { color: "#ceff97" },
          "80": { color: "#ff9797" },
        },
        markers: {
          "50": {
            color: "#f85716",
            type: "triangle",
            size: 8,
            label: "Goal",
            font: "12px arial",
          },
        },
        margin: 30,
        animate: true,
        arialabel: "Velocidad",
        arialabelledby: "Velocidad",
      },
    ];
  }
}
