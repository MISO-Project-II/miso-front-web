import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import {
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { StatusModel } from "src/models/local/status-model";
// import { IFoodRoutines } from "src/models/routines/food-routines.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { FoodPlansService } from "src/services/home/plans/food-plans.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

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
    console.log("🚀 XXX - FoodPlanComponent : ");
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
  // public selectFoodPlan() {
  //   this._statusService.spinnerShow();
  //   const data: IUserData = this._userData;
  //   data.foodPlan = this._foodPlanSelected;
  //   this._callService(data);
  // }
  // private _loadData(): void {
  //   this._statusService.spinnerShow();
  //   this._userDataService
  //     .get(this.getGeneralStatus.userId)
  //     .subscribe({
  //       next: (res: IResUserData) => {
  //         if (!!res && res.success) {
  //           this._userData = res?.result!;
  //         }
  //         setTimeout(() => {
  //           this._statusService.spinnerHide();
  //         }, 500);
  //       },
  //       error: (e) => {
  //         console.error(e);
  //         this._statusService.spinnerHide();
  //       },
  //     })
  //     .unsubscribe();
  // }
  // private _callService(data: IUserData): void {
  //   this._userDataService
  //     .update(this._statusService.getUserId(), data)
  //     .pipe(takeUntil(this._destroy$))
  //     .subscribe({
  //       next: (res: IResUserData) => {
  //         if (!!res && res.success) {
  //           console.log("XXX - FoodPlanComponent - _callService - res", res);
  //         }
  //         setTimeout(() => {
  //           this._statusService.spinnerHide();
  //         }, 500);
  //       },
  //       error: (e) => {
  //         console.error(e);
  //         this._statusService.spinnerHide();
  //       },
  //     });
  // }
}
