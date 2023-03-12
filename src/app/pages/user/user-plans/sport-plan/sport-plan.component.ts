import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import {
  ISportPlans,
  SportRoutineList,
} from "src/models/home/sport-plans.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { StatusService } from "src/services/local/status.service";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { StatusModel } from "src/models/local/status-model";
import { UserDataService } from "src/services/user-data/user-data.service";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";

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

  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log("🚀 XXX - SportPlanComponent - ngOnInit - ngOnInit : ");
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSportPlan$(): ISportPlans {
    return this._sportPlanSelected;
  }
  get getSportRoutines$(): SportRoutineList {
    return this._sportRoutines;
  }
  get getIdSportPlan$(): number {
    return this.getGeneralStatus$.idSportPlan;
  }
  get getSportPlansList$(): ISportPlans[] {
    return this._statusService.getSportPlansList();
  }
  public setSportPlan(sportPlanSelected: ISportPlans) {
    this._sportPlanSelected = sportPlanSelected;
  }
  public setRoutine(sportRoutines: SportRoutineList) {
    this._sportRoutines = sportRoutines;
  }

  public selectSportPlan(idSportPlan: number): void {
    this._statusService.spinnerShow();
    const data: IUserData = {
      username: this.getGeneralStatus$?.username,
      name: this.getGeneralStatus$?.name,
      lastName: this.getGeneralStatus$?.lastName,
      idIdentificationType: this.getGeneralStatus$?.idIdentificationType,
      identificationNumber: this.getGeneralStatus$?.identificationNumber,
      birthdUbication: this.getGeneralStatus$?.birthdUbication,
      homeUbication: this.getGeneralStatus$?.homeUbication,
      gender: this.getGeneralStatus$?.gender,
      age: this.getGeneralStatus$?.age,
      weight: this.getGeneralStatus$?.weight,
      height: this.getGeneralStatus$?.height,
      userPlan: this.getGeneralStatus$?.contractType,
      imc: this.getGeneralStatus$?.imc,
      isVegan: this.getGeneralStatus$?.isVegan,
      isvegetarian: this.getGeneralStatus$?.isvegetarian,
      idSportPlan: idSportPlan ? idSportPlan : 0,
      idFoodPlan: this.getGeneralStatus$?.idFoodPlan,
    };
    console.log("🚀 XXX - SportPlanComponent - onSubmit - data : ", data);

    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._userDataService
      .updateGeneralData(this.getGeneralStatus$.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - SportPlanComponent - _callService - res : ",
              res
            );
            this._router.navigate([
              this.getGeneralStatus$.userUrl + ROUTES_NAMES.HOME,
            ]);
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
