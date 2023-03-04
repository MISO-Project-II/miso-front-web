import { ISportRoutines } from "src/models/routines/sport-routines.interface";
import { Component, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  IResSportPlans,
  ISportPlans,
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
export class SportPlanComponent implements OnInit {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _sportPlanSelected: ISportPlans;
  private _sportRoutines: ISportRoutines;
  private _userData: IUserData;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _sportPlansService: SportPlansService,
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
    this._loadSportPlans();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSportPlanService$(): Observable<IResSportPlans> {
    return this._sportPlansService.getSportPlan();
  }
  get getSportPlan$(): ISportPlans {
    return this._sportPlanSelected;
  }
  get getSportRoutines$(): ISportRoutines {
    return this._sportRoutines;
  }
  public setSportPlan(sportPlanSelected: ISportPlans) {
    this._sportPlanSelected = sportPlanSelected;
  }
  public setRoutine(sportRoutines: ISportRoutines) {
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
  private _loadSportPlans(): void {
    this.getSportPlanService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResSportPlans) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - _loadSportPlans - res : ", JSON.stringify(res));
          this._statusService.setSportPlansList(res.result!);
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
