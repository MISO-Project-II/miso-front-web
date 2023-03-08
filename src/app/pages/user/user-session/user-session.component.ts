import { ISession } from "./../../../../models/general/session.interface";
import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject } from "rxjs";
import { NgxGaugeCap, NgxGaugeType } from "src/constanst/data.constants";
import { MockSessions } from "src/test/general/session.mock";
@Component({
  selector: "app-user-session",
  templateUrl: "./user-session.component.html",
  styleUrls: ["./user-session.component.scss"],
})
export class UserSessionComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public formSession: FormGroup;
  public sessionData: ISession[];
  constructor() {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
    this._initForm();
    this.getSessionData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formSession = new FormGroup({
      dato: new FormControl(MockSessions[0]),
    });
  }
  private getSessionData(): void {
    this.sessionData = MockSessions;
    console.log("🚀 XXX - sessionData : ", this.sessionData[0].value);
  }

  public onSubmit(): void {}
}
