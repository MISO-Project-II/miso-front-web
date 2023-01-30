import { Component, OnInit } from "@angular/core";
import {
  FREE_PLAN,
  MEDIUM_PLAN,
  PREMIUM_PLAN,
} from "src/constanst/data.constats";
import { IPlan } from "src/models/update-plan/update-plan.interface";
import { StatusService } from "src/services/local/status.service";
import { UpdatePlanService } from "src/services/update-plan/update-plan.service";

@Component({
  selector: "app-plan-detail",
  templateUrl: "./plan-detail.component.html",
  styleUrls: ["./plan-detail.component.scss"],
})
export class PlanDetailComponent implements OnInit {
  public FREE_PLAN: string = FREE_PLAN;
  public MEDIUM_PLAN: string = MEDIUM_PLAN;
  public PREMIUM_PLAN: string = PREMIUM_PLAN;

  constructor(
    private _statusService: StatusService,
    private _updatePlanService: UpdatePlanService
  ) {}
  ngOnInit() {
    console.log(
      "this._statusService.getPlanType()",
      this._statusService.getPlan()
    );
  }

  get actualPlan(): string {
    return this._statusService.getPlan();
  }

  public onSubmit(plan: string): void {
    this._statusService.spinnerShow();
    const data: IPlan = {
      plan: plan,
    };
    this._updatePlan(data);
  }

  private _updatePlan(data: IPlan): void {
    this._updatePlanService
      .update(this._statusService.getUserId(), data)
      .subscribe({
        next: (res) => {
          if (res.success) {
            this._statusService.setPlan(res.response?.plan!);
            window.location.href = "https://epayco.com/";
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
