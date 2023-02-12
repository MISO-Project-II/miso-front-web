import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_PLAN,
  MEDIUM_PLAN,
  PREMIUM_PLAN,
  SPORTSMAN,
} from "src/constanst/data.constats";
import { IResSports, ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { SportsService } from "src/services/general/sports.service";

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
  constructor(
    private _statusService: StatusService,
    private _sportsService: SportsService
  ) {}

  ngOnInit() {
    console.log("XXX - Entra a UserDashboardComponent");
    this._statusService.setUserType(SPORTSMAN);
    this._loadSports();
  }
  ngOnDestroy(): void {
    console.log("XXX - Sale de UserDashboardComponent");
    this._destroy$.next(true);
    this._destroy$.complete();
    localStorage.clear();
    sessionStorage.clear();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSportsService$(): Observable<IResSports> {
    return this._sportsService.getAll();
  }
  private _loadSports(): void {
    this.getSportsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResSports) => {
        // if (res.success) {
        this._statusService.setSportsList(res.results!);
        console.log("XXX - UserRegisterComponent - ngOnInit - res", res);
        // }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
