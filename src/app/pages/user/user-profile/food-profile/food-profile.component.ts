import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { StatusService } from "src/services/local/status.service";
import { FoodProfileService } from "src/services/profile/food-profile.service";
import { SportProfileService } from "src/services/profile/sport-profile.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-food-profile",
  templateUrl: "./food-profile.component.html",
  styleUrls: ["./food-profile.component.scss"],
})
export class FoodProfileComponent implements OnInit, OnDestroy {
  public formUserFoodProfile: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public foodList: any[] = [];
  public listFoodPreference: any[] = [];
  public allergiesList: any[] = [];
  public userAllergiesList: any[] = [];
  public userDisabilitiesList?: any[] = []; // IDisabilities
  public userPainList?: any[] = []; // IPains
  public userData: IUserData;

  constructor(
    private _statusService: StatusService,
    private _foodProfileService: FoodProfileService,
    private _sportProfileService: SportProfileService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
    this._initForm();
    this._loadData();
    this._foodServiceGetFoodList$.pipe(takeUntil(this._destroy$)).subscribe({
      next: (data) => {
        if (data.success) {
          this.foodList = data.result || [];
        }
      },
      error: (err) => {},
    });
    this._sportsServiceGetImpediments$
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (data) => {
          if (data.success && data.result && data.result.length > 0) {
            this.allergiesList = data.result.filter(
              (r: any) => r.impedimentType == "ALLERGY"
            );
          }
        },
        error: () => {},
      });
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  private _loadData(): void {
    this._userDataService
      .getGeneralData(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success && res.result) {
            this.userData = res.result;
            this.is_vegetarian?.patchValue(this.userData.isvegetarian == 1);
            this.is_vegan?.patchValue(this.userData.isVegan == 1);
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
    this._sportProfileService
      .getImpedimentsByUser(this.getGeneralStatus.userId)
      .subscribe({
        next: (response) => {
          if (
            response.success &&
            response.result &&
            response.result.impediments
          ) {
            this.userDisabilitiesList =
              response.result.impediments["INJURY"] || [];
            this.userPainList =
              response.result.impediments["INCONVENIENCE"] || [];
            this.userAllergiesList =
              response.result.impediments["ALLERGY"] || [];
            this.intolerances?.patchValue(this.userAllergiesList);
          }
        },
        error: () => {},
      });
  }
  private _initForm(): void {
    this.formUserFoodProfile = new FormGroup({
      foods_preference: new FormControl("", [Validators.required]),
      intolerances: new FormControl("", [Validators.required]),
      is_vegan: new FormControl(false, [Validators.required]),
      is_vegetarian: new FormControl(false, [Validators.required]),
    });
    this.is_vegan?.valueChanges.subscribe({
      next: (value) => {
        if (value && this.is_vegetarian?.value) {
          this.is_vegetarian.setValue(false);
        }
      },
    });
    this.is_vegetarian?.valueChanges.subscribe({
      next: (value) => {
        if (value && this.is_vegan?.value) {
          this.is_vegan.setValue(false);
        }
      },
    });
  }
  get f() {
    return this.formUserFoodProfile.controls;
  }
  get foods_preference() {
    return this.formUserFoodProfile.get("foods_preference");
  }
  get intolerances() {
    return this.formUserFoodProfile.get("intolerances");
  }
  get is_vegan() {
    return this.formUserFoodProfile.get("is_vegan");
  }
  get is_vegetarian() {
    return this.formUserFoodProfile.get("is_vegetarian");
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get _foodServiceGetFoodList$(): Observable<any> {
    return this._foodProfileService.getFoodList();
  }
  get _sportsServiceGetImpediments$(): Observable<any> {
    return this._sportProfileService.getImpediments();
  }

  public addFoodPreference(item: any): void {
    this.listFoodPreference?.push(item);
    this.listFoodPreference = [...new Set(this.listFoodPreference)];
    this.foods_preference?.patchValue(this.listFoodPreference);
  }
  public delFoodPreference(item: any): void {
    this.listFoodPreference = this.listFoodPreference?.filter(
      (data: any) => data.idFood != item.idFood
    );
    this.foods_preference?.patchValue(this.listFoodPreference);
  }

  public addAllergy(item: any): void {
    if (
      !this.userAllergiesList?.find((a) => a.IdImpediment == item.IdImpediment)
    ) {
      this.userAllergiesList?.push(item);
    }
    this.intolerances?.patchValue(this.userAllergiesList);
  }
  public delAllergy(item: any): void {
    this.userAllergiesList = this.userAllergiesList?.filter(
      (data: any) => data.IdImpediment != item.IdImpediment
    );
    this.intolerances?.patchValue(this.userAllergiesList);
  }

  public onSubmitFoodProfile(): void {
    let listFoods = ((this.foods_preference?.value as any[]) || []).map(
      (s) => s.idFood
    );
    let listImpediments = ((this.intolerances?.value as any[]) || []).map(
      (s) => s.IdImpediment
    );
    listImpediments = listImpediments.concat(
      (this.userDisabilitiesList || []).map((s) => s.IdImpediment)
    );
    listImpediments = listImpediments.concat(
      (this.userPainList || []).map((s) => s.IdImpediment)
    );
    if (this.userData) {
      // this.userData.isVegan = this.is_vegan?.value ? 1 : 0;
      // this.userData.isvegetarian = this.is_vegetarian?.value ? 1 : 0;
      this.userData = {
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
        isVegan: this.is_vegan?.value ? 1 : 0,
        isvegetarian: this.is_vegetarian?.value ? 1 : 0,
        idSportPlan: this.getGeneralStatus$?.idSportPlan,
        idFoodPlan: this.getGeneralStatus$?.idFoodPlan,
      };
    }
    this._callService(listFoods, listImpediments, this.userData);
  }
  private _callService(
    listFoods: number[],
    listImpediments: number[],
    data: IUserData
  ): void {
    this._statusService.spinnerShow();
    // Falta Enviar FOODS
    this._sportProfileService
      .postImpedimentsByUser(this.getGeneralStatus.userId, listImpediments)
      .subscribe({
        next: () => {
          // XXX Validar rta
          this._statusService.spinnerHide();
        },
      });
    this._userDataService
      .updateGeneralData(this.getGeneralStatus.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log("🚀 XXX - FoodProfileComponent - res : ", res);
            window.dispatchEvent(new CustomEvent("updateGeneralData"));
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        () => {}
      );
  }
  // @HostListener("window:updateGeneralData")
  // updateGeneralData() {
  //   this._loadData();
  // }
}
