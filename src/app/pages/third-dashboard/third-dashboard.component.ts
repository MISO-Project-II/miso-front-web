import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
  THIRD,
} from "src/constanst/data.constants";
import { removeSessionStorage } from "src/helper/sessionStorage.helper";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-dashboard",
  templateUrl: "./third-dashboard.component.html",
  styleUrls: ["./third-dashboard.component.scss"],
})
export class ThirdDashboardComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    this._statusService.setUserType(THIRD);
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
    removeSessionStorage();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
