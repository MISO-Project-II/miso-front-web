import { ITrainingRoutines } from "src/models/routines/training-routines.interface";
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
import { INSIDE_OF_HOUSE, OUTSIDE_OF_HOUSE } from "src/constanst/data.constats";

@Component({
  selector: "app-training-plan",
  templateUrl: "./training-plan.component.html",
  styleUrls: ["./training-plan.component.scss"],
})
export class TrainingPlanComponent implements OnInit {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _sportPlanSelected: ISportPlans;
  private _trainingRoutines: ITrainingRoutines;
  private _userData: IUserData;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _sportPlansService: SportPlansService,
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
    this._loadData();
  }
  get sportPlansServiceGetAll$(): Observable<IResSportPlans> {
    return this._sportPlansService.getAll();
  }
  get getSportPlan$(): ISportPlans {
    return this._sportPlanSelected;
  }
  get getTrainingRoutines$(): ITrainingRoutines {
    return this._trainingRoutines;
  }
  public setSportPlan(sportPlanSelected: ISportPlans) {
    this._sportPlanSelected = sportPlanSelected;
  }
  public setRoutine(trainingRoutines: ITrainingRoutines) {
    this._trainingRoutines = trainingRoutines;
  }
  public selectSportPlan() {
    this._statusService.spinnerShow();
    const data: IUserData = this._userData;
    data.sportPlan = this._sportPlanSelected;
    this._callService(data);
  }
  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            this._userData = res?.response!;
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
  private _callService(data: IUserData): void {
    this._userDataService
      .update(this._statusService.getUserId(), data)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            console.log(
              "XXX - TrainingPlanComponent - _callService - res",
              res
            );
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
