import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import {
  FREE_PLAN,
  MEDIUM_PLAN,
  PREMIUM_PLAN,
  SPORTSMAN,
} from "src/constanst/data.constants";
import { StatusModel } from "src/models/local/status-model";

import { StatusService } from "src/services/local/status.service";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public FREE_PLAN: string = FREE_PLAN;
  public MEDIUM_PLAN: string = MEDIUM_PLAN;
  public PREMIUM_PLAN: string = PREMIUM_PLAN;
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log("XXX - Entra a UserDashboardComponent");
    this._statusService.setUserType(SPORTSMAN);
  }
  ngOnDestroy(): void {
    console.log("XXX - Sale de UserDashboardComponent");
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
