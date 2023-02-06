import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROOT_ROUTES_NAMES } from "src/app/app.routing";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-horizontal-menu",
  templateUrl: "./ds-horizontal-menu.component.html",
  styleUrls: ["./ds-horizontal-menu.component.scss"],
})
export class DsHorizontalMenuComponent implements OnInit {
  @Input() userName: string = "";
  @Input() plan: string = "";
  public userType: string;

  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this.userType = this._statusService
      .getUrlUser()
      .substring(0, this._statusService.getUrlUser().length - 1);
  }

  public goProfile(): void {
    this._router.navigate([
      this._statusService.getUrlUser() + ROUTES_NAMES.PROFILE,
    ]);
  }
}
