import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import {
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-food-plan",
  templateUrl: "./food-plan.component.html",
  styleUrls: ["./food-plan.component.scss"],
})
export class FoodPlanComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _foodPlanSelected: IFoodPlans;
  private _foodRoutines: FoodRoutineList;
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log("🚀 XXX - FoodPlanComponent - ngOnInit - ngOnInit : ");
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }

  get getFoodPlan$(): IFoodPlans {
    return this._foodPlanSelected;
  }
  get getFoodRoutines$(): FoodRoutineList {
    return this._foodRoutines;
  }
  public setFoodPlan(foodPlanSelected: IFoodPlans) {
    this._foodPlanSelected = foodPlanSelected;
  }
  public setRoutine(foodRoutines: FoodRoutineList) {
    this._foodRoutines = foodRoutines;
  }
  get getFoodPlansList$(): IFoodPlans[] {
    return this._statusService.getFoodPlansList();
  }
}
