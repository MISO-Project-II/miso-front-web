import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
  SPORTSMAN,
} from "src/constanst/data.constants";
import { IResSports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { SportsService } from "src/services/general/sports.service";

import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log("XXX - Entra a UserDashboardComponent");
  }
  ngOnDestroy(): void {
    console.log("XXX - Sale de UserDashboardComponent");
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
