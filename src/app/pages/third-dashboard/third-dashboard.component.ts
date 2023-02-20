import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
  THIRD,
} from "src/constanst/data.constants";
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
    console.log("XXX - Sale de ThirdDashboardComponent");
    this._statusService.setUserType(THIRD);
  }
  ngOnDestroy(): void {
    console.log("XXX - Sale de ThirdDashboardComponent");
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
