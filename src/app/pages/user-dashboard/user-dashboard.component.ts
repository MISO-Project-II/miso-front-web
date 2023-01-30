import { Component, OnInit } from "@angular/core";
import {
  FREE_PLAN,
  MEDIUM_PLAN,
  PREMIUM_PLAN,
} from "src/constanst/data.constats";
import { IResUserData } from "src/models/user-data/user-data.interface";

import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";
@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent implements OnInit {
  public FREE_PLAN: string = FREE_PLAN;
  public MEDIUM_PLAN: string = MEDIUM_PLAN;
  public PREMIUM_PLAN: string = PREMIUM_PLAN;
  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
    this._statusService.setIsUser(true);
    this._loadData();
  }
  get userName(): string {
    return this._statusService.getUserName();
  }
  get planType(): string {
    return this._statusService.getPlan();
  }
  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success && !!res.response) {
            this._statusService.setPlan(res.response?.plan!);
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      })
      .unsubscribe();
  }
}
