import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import {
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
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
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  private _foodPlanSelected: IFoodPlans;
  private _foodRoutines: FoodRoutineList;
  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _userDataService: UserDataService,
    private _router: Router
  ) {}

  ngOnInit() {
    console.log("🚀 XXX - FoodPlanComponent - ngOnInit - ngOnInit : ");
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
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
  get getIdFoodPlan$(): number {
    return this.getGeneralStatus$.idFoodPlan;
  }
  get getContractType$(): string {
    return this._statusService.getGeneralStatus().contractType;
  }

  public getContractTypeValidate(contracType: string): boolean {
    switch (contracType) {
      case FREE_CONTRACT:
        return true;
      case INTERMEDIATE_CONTRACT:
        return true;
      case PREMIUM_CONTRACT:
        return true;
      default:
        return false;
    }
  }

  // && getContractType$ === INTERMEDIATE_CONTRACT ? true : false || getContractType$ === FREE_CONTRACT ? true : false || getContractType$ === PREMIUM_CONTRACT ? true : false

  public selectFoodPlan(idFoodPlan: number): void {
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
      isVegan: this.getGeneralStatus$?.isVegan,
      isvegetarian: this.getGeneralStatus$?.isvegetarian,
      imc: this.getGeneralStatus$?.imc,
      idSportPlan: this.getGeneralStatus$?.idFoodPlan,
      idFoodPlan: idFoodPlan ? idFoodPlan : 0,
    };
    console.log("🚀 XXX - FoodPlanComponent - onSubmit - data : ", data);

    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._statusService.spinnerShow();
    this._userDataService
      .updateGeneralData(this.getGeneralStatus$.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - FoodPlanComponent - _callService - res : ",
              res
            );
            setTimeout(() => {
              this._statusService.setIdSportPlan(res.result?.idSportPlan!);
              this._router.navigate([
                this.getGeneralStatus$.userUrl + ROUTES_NAMES.HOME,
              ]);
            }, 100);
            this._statusService.spinnerHide();
            this._statusService.toastInfo(
              this._translateService.instant("TOAST.ENROLL")
            );
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
