import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  ISportPlans,
  SportRoutineList,
} from "src/models/home/sport-plans.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { SportPlansService } from "src/services/home/plans/sport-plans.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { StatusModel } from "src/models/local/status-model";

@Component({
  selector: "app-sport-plan",
  templateUrl: "./sport-plan.component.html",
  styleUrls: ["./sport-plan.component.scss"],
})
export class SportPlanComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _sportPlanSelected: ISportPlans;
  private _sportRoutines: SportRoutineList;
  private _userData: IUserData;
  constructor(
    private _sportPlansService: SportPlansService,
    private _statusService: StatusService
  ) {}

  ngOnInit() {
    console.log("🚀 XXX - SportPlanComponent : ");
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSportPlanService$(): Observable<ISportPlans[]> {
    return this._sportPlansService.getSportPlan();
  }
  get getSportPlan$(): ISportPlans {
    return this._sportPlanSelected;
  }
  get getSportRoutines$(): SportRoutineList {
    return this._sportRoutines;
  }
  public setSportPlan(sportPlanSelected: ISportPlans) {
    this._sportPlanSelected = sportPlanSelected;
  }
  public setRoutine(sportRoutines: SportRoutineList) {
    this._sportRoutines = sportRoutines;
  }
  get getSportPlansList$(): ISportPlans[] {
    return this._statusService.getSportPlansList();
  }
  // public selectSportPlan() {
  //   this._statusService.spinnerShow();
  //   const data: IUserData = this._userData;
  //   data.sportPlan = this._sportPlanSelected;
  //   this._callService(data);
  // }
  // private _loadData(): void {
  //   this._statusService.spinnerShow();
  //   this._userDataService
  //     .get(this._statusService.getUserId())
  //     .subscribe({
  //       next: (res: IResUserData) => {
  //         if (!!res && res.success) {
  //           this._userData = res?.response!;
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
  //           console.log(
  //             "XXX - SportPlanComponent - _callService - res",
  //             res
  //           );
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
