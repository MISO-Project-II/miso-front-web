import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROOT_ROUTES_NAMES } from "src/app/app.routing";
import { SPORTSMAN } from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-horizontal-menu",
  templateUrl: "./ds-horizontal-menu.component.html",
  styleUrls: ["./ds-horizontal-menu.component.scss"],
})
export class DsHorizontalMenuComponent implements OnInit {
  @Input() userName: string = "";
  @Input() contractType: string = "";
  public userType: string;
  public SPORTSMAN: string = SPORTSMAN;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this.userType = this.getGeneralStatus$?.userUrl?.substring(
      0,
      this.getGeneralStatus$.userUrl.length - 1
    );
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  public goProfile(): void {
    this._router.navigate([
      this.getGeneralStatus$.userUrl + ROUTES_NAMES.PROFILE,
    ]);
  }
}
