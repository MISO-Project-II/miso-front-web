import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserFoodProfile,
  IUserFoodProfile,
} from "src/models/profile/food-profile.interface";
import { IResUserData, IUserData } from "src/models/user-data/user-data.interface";
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
      }, error: (err) => { }
    });
    this._sportsServiceGetImpediments$.pipe(takeUntil(this._destroy$)).subscribe({
      next: (data) => {
        if (data.success && data.result && data.result.length > 0) {
          this.allergiesList = data.result.filter((r: any) => r.impedimentType == 'ALLERGY');
        }
      }, error: () => { }
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
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
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
    // this._statusService.spinnerShow();
    // this._foodProfileService
    //   .get(this.getGeneralStatus.userId)
    //   .pipe(takeUntil(this._destroy$))
    //   .subscribe(
    //     (res: IResUserFoodProfile) => {
    //       if (!!res && res.success) {
    //         this.formUserFoodProfile
    //           .get("foods_preference")
    //           ?.patchValue(res.response?.foods_preference);
    //         this.formUserFoodProfile
    //           .get("intolerances")
    //           ?.patchValue(res.response?.intolerances);
    //         this.formUserFoodProfile
    //           .get("is_vegan")
    //           ?.patchValue(res.response?.is_vegan);
    //         this.formUserFoodProfile
    //           .get("is_vegetarian")
    //           ?.patchValue(res.response?.is_vegetarian);
    //       }
    //       this._statusService.spinnerHide();
    //     },
    //     (err) => {
    //       console.error(err);
    //       this._statusService.spinnerHide();
    //     }
    //   );
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
      }
    });
    this.is_vegetarian?.valueChanges.subscribe({
      next: (value) => {
        if (value && this.is_vegan?.value) {
          this.is_vegan.setValue(false);
        }
      }
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

  public addAllergie(item: any): void {
    this.userAllergiesList?.push(item);
    this.userAllergiesList = [...new Set(this.userAllergiesList)];
    this.intolerances?.patchValue(this.userAllergiesList);
  }
  public delAllergie(item: any): void {
    this.userAllergiesList = this.userAllergiesList?.filter(
      (data: any) => data.IdImpediment != item.IdImpediment
    );
    this.intolerances?.patchValue(this.userAllergiesList);
  }

  public onSubmit(): void {
    let listFoods = ((this.foods_preference?.value as any[]) || []).map(s => s.idFood);
    let listImpediments = ((this.intolerances?.value as any[]) || []).map(s => s.IdImpediment);
    listImpediments = listImpediments.concat((this.userDisabilitiesList || []).map(s => s.IdImpediment));
    listImpediments = listImpediments.concat((this.userPainList || []).map(s => s.IdImpediment));
    if (this.userData) {
      this.userData.isVegan = this.is_vegan?.value ? 1 : 0;
      this.userData.isvegetarian = this.is_vegetarian?.value ? 1 : 0;
    }
    // this._statusService.spinnerShow();
    // const data: IUserFoodProfile = {
    //   foods_preference: this.foods_preference?.value,
    //   intolerances: this.intolerances?.value,
    //   is_vegan: this.is_vegan?.value,
    //   is_vegetarian: this.is_vegetarian?.value,
    // };
    this._callService(listFoods, listImpediments, this.userData);
  }
  private _callService(listFoods: number[], listImpediments: number[], data: IUserData): void {
    this._sportProfileService.postImpedimentsByUser(this.getGeneralStatus.userId, listImpediments).subscribe({
      next: () => {
        console.log('success impediments');
        this._statusService.spinnerHide();
      }
    });
    this._userDataService
      .updateGeneralData(this.getGeneralStatus.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log("XXX - GeographicProfileComponent - _callService - res", res);
            window.dispatchEvent(new CustomEvent('updateGeneralData'));
          }
          this._statusService.spinnerHide();
        }, () => { }
      );
    // this._foodProfileService
    //   .update(this.getGeneralStatus.userId, data)
    //   .pipe(takeUntil(this._destroy$))
    //   .subscribe(
    //     (res: IResUserFoodProfile) => {
    //       if (!!res && res.success) {
    //         console.log("XXX - FoodProfileComponent - _callService - res", res);
    //         this._loadData();
    //       }
    //       this._statusService.spinnerHide();
    //     },
    //     (err) => {
    //       console.error(err);
    //       this._statusService.spinnerHide();
    //     }
    //   );
  }

  @HostListener('window:updateGeneralData')
  updateGeneralData() {
    this._loadData();
  }

}
