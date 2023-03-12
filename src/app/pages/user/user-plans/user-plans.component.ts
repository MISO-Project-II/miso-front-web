import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IFoodPlans } from "src/models/home/food-plans.interface";
import { ISportPlans } from "src/models/home/sport-plans.interface";
import { FoodPlansService } from "src/services/home/plans/food-plans.service";
import { SportPlansService } from "src/services/home/plans/sport-plans.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-plans",
  templateUrl: "./user-plans.component.html",
  styleUrls: ["./user-plans.component.scss"],
})
export class UserPlansComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _sportPlansService: SportPlansService,
    private _foodPlansService: FoodPlansService
  ) {}

  ngOnInit() {
    this._loadSportPlans();
    this._loadFoodPlans();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getSportPlanService$(): Observable<ISportPlans[]> {
    return this._sportPlansService.getSportPlan();
  }
  get getFoodPlansService$(): Observable<IFoodPlans[]> {
    return this._foodPlansService.getFoodPlans();
  }
  private _loadSportPlans(): void {
    this.getSportPlanService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: ISportPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserPlansComponent - _loadSportPlans - res : ",
            res
          );
          this._statusService.setSportPlansList(res);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadFoodPlans(): void {
    this.getFoodPlansService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IFoodPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserPlansComponent - _loadFoodPlans - res : ",
            res
          );
          this._statusService.setFoodPlansList(res);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
}
