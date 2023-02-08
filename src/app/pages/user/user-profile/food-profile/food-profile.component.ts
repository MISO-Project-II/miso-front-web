import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import {
  IResUserFoodProfile,
  IUserFoodProfile,
} from "src/models/profile/food-profile.interface";
import { StatusService } from "src/services/local/status.service";
import { FoodProfileService } from "src/services/profile/food-profile.service";

@Component({
  selector: "app-food-profile",
  templateUrl: "./food-profile.component.html",
  styleUrls: ["./food-profile.component.scss"],
})
export class FoodProfileComponent implements OnInit, OnDestroy {
  public formUserFoodProfile: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _foodProfileService: FoodProfileService
  ) {}

  ngOnInit() {
    this._initForm();
    this._loadData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _loadData(): void {
    this._statusService.spinnerShow();
    this._foodProfileService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserFoodProfile) => {
          if (res.success) {
            this.formUserFoodProfile
              .get("foods_preference")
              ?.patchValue(res.response?.foods_preference);
            this.formUserFoodProfile
              .get("intolerances")
              ?.patchValue(res.response?.intolerances);
            this.formUserFoodProfile
              .get("is_vegan")
              ?.patchValue(res.response?.is_vegan);
            this.formUserFoodProfile
              .get("is_vegetarian")
              ?.patchValue(res.response?.is_vegetarian);
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

  private _initForm(): void {
    this.formUserFoodProfile = new FormGroup({
      foods_preference: new FormControl("", [Validators.required]),
      intolerances: new FormControl("", [Validators.required]),
      is_vegan: new FormControl(false, [Validators.required]),
      is_vegetarian: new FormControl(false, [Validators.required]),
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

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserFoodProfile = {
      foods_preference: this.foods_preference?.value,
      intolerances: this.intolerances?.value,
      is_vegan: this.is_vegan?.value,
      is_vegetarian: this.is_vegetarian?.value,
    };
    this._callService(data);
  }
  private _callService(data: IUserFoodProfile): void {
    this._foodProfileService
      .update(this._statusService.getUserId(), data)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res: IResUserFoodProfile) => {
          if (res.success) {
            console.log("XXX - FoodProfileComponent - _callService - res", res);
            this._loadData();
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
