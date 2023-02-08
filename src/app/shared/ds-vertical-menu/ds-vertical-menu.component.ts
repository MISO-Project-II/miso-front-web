import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-vertical-menu",
  templateUrl: "./ds-vertical-menu.component.html",
  styleUrls: ["./ds-vertical-menu.component.scss"],
})
export class DsVerticalMenuComponent implements OnInit {
  public ROUTES_NAMES = ROUTES_NAMES;
  public isUser: boolean;
  public logo: string;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this.isUser = this._statusService.getIsUser();
    this.logo = this.isUser
      ? "../../../assets/logo-user.png"
      : "../../../assets/logo-third.png";
  }

  public goUserHome(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.HOME,
    ]);
  }
  public goUserSession(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.SESSION,
    ]);
  }
  public goUserEvents(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.EVENTS,
    ]);
  }
  public goUserServices(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.SERVICES,
    ]);
  }
  public goUserPlans(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.PLANS,
    ]);
  }
}
