import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SPORTSMAN, THIRD } from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-vertical-menu",
  templateUrl: "./ds-vertical-menu.component.html",
  styleUrls: ["./ds-vertical-menu.component.scss"],
})
export class DsVerticalMenuComponent implements OnInit {
  public ROUTES_NAMES = ROUTES_NAMES;
  public SPORTSMAN = SPORTSMAN;
  public THIRD = THIRD;
  public userType: string;
  public logo: string;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this.userType = this.getGeneralStatus.userType;
    this.logo = this.userType
      ? "../../../assets/logo-user.png"
      : "../../../assets/logo-third.png";
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  public goUserHome(): void {
    this._router.navigate([this.getGeneralStatus.userUrl + ROUTES_NAMES.HOME]);
  }
  public goUserSession(): void {
    this._router.navigate([
      this.getGeneralStatus.userUrl + ROUTES_NAMES.SESSION,
    ]);
  }
  public goUserEvents(): void {
    this._router.navigate([
      this.getGeneralStatus.userUrl + ROUTES_NAMES.EVENTS,
    ]);
  }
  public goUserServices(): void {
    this._router.navigate([
      this.getGeneralStatus.userUrl + ROUTES_NAMES.SERVICES,
    ]);
  }
  public goUserProducts(): void {
    this._router.navigate([
      this.getGeneralStatus.userUrl + ROUTES_NAMES.PRODUCTS,
    ]);
  }
  public goUserPlans(): void {
    this._router.navigate([this.getGeneralStatus.userUrl + ROUTES_NAMES.PLANS]);
  }
}
