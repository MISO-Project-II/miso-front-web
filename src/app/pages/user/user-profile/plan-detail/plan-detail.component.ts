import { Component, OnInit } from "@angular/core";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";

import { IPlan } from "src/models/update-plan/update-plan.interface";
import { StatusService } from "src/services/local/status.service";
import { UpdatePlanService } from "src/services/update-plan/update-plan.service";

@Component({
  selector: "app-plan-detail",
  templateUrl: "./plan-detail.component.html",
  styleUrls: ["./plan-detail.component.scss"],
})
export class PlanDetailComponent implements OnInit {
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  constructor(
    private _statusService: StatusService,
    private _updatePlanService: UpdatePlanService
  ) {}
  ngOnInit() {
    console.log(
      "this._statusService.getPlanType()",
      this._statusService.getGeneralStatus().contractType
    );
  }

  get getContractType(): string {
    return this._statusService.getGeneralStatus().contractType;
  }

  public onSubmit(contractType: string): void {
    this._statusService.spinnerShow();
    const data: IPlan = {
      contractType: contractType,
    };
    this._updatePlan(data);
  }

  private _updatePlan(data: IPlan): void {
    this._updatePlanService
      .update(this._statusService.getGeneralStatus().userId, data)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this._statusService.setContractType(res.response?.contractType!);
            window.open("https://epayco.com/");
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      });
  }
}
