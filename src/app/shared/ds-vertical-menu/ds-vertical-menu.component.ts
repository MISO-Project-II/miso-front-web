import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { Observable } from "rxjs/internal/Observable";
import { SPORTSMAN } from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-vertical-menu",
  templateUrl: "./ds-vertical-menu.component.html",
  styleUrls: ["./ds-vertical-menu.component.scss"],
})
export class DsVerticalMenuComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public ROUTES_NAMES = ROUTES_NAMES;
  public SPORTSMAN = SPORTSMAN;
  public userType: string;
  public logo: string;
  public generalStatus: StatusModel;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this._loadGeneralStatus();
    this.userType = this.generalStatus.userType;
    this.logo = this.userType
      ? "../../../assets/logo-user.png"
      : "../../../assets/logo-third.png";
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  public goUserHome(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.HOME]);
  }
  public goUserSession(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.SESSION]);
  }
  public goUserEvents(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.EVENTS]);
  }
  public goUserServices(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.SERVICES]);
  }
  public goUserPlans(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.PLANS]);
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
