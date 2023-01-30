import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";

import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-general-data",
  templateUrl: "./general-data.component.html",
  styleUrls: ["./general-data.component.scss"],
})
export class GeneralDataComponent implements OnInit, OnDestroy {
  public formUserGeneralData: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
    this._initForm();
    this._loadData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formUserGeneralData = new FormGroup({
      user: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      IdType: new FormControl("", [Validators.required]),
      IdNumber: new FormControl("", [Validators.required]),
      genre: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
    });
  }
  get form() {
    return this.formUserGeneralData.controls;
  }
  get user() {
    return this.formUserGeneralData.get("user");
  }
  get name() {
    return this.formUserGeneralData.get("name");
  }
  get lastName() {
    return this.formUserGeneralData.get("lastName");
  }
  get IdType() {
    return this.formUserGeneralData.get("IdType");
  }
  get IdNumber() {
    return this.formUserGeneralData.get("IdNumber");
  }
  get genre() {
    return this.formUserGeneralData.get("genre");
  }
  get age() {
    return this.formUserGeneralData.get("age");
  }
  get weight() {
    return this.formUserGeneralData.get("weight");
  }
  get height() {
    return this.formUserGeneralData.get("height");
  }

  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            this.formUserGeneralData
              .get("user")
              ?.patchValue(res.response?.user);
            this.formUserGeneralData
              .get("name")
              ?.patchValue(res.response?.name);
            this.formUserGeneralData
              .get("lastName")
              ?.patchValue(res.response?.lastName);
            this.formUserGeneralData
              .get("IdType")
              ?.patchValue(res.response?.IdType);
            this.formUserGeneralData
              .get("IdNumber")
              ?.patchValue(res.response?.IdNumber);
            this.formUserGeneralData
              .get("genre")
              ?.patchValue(res.response?.genre);
            this.formUserGeneralData.get("age")?.patchValue(res.response?.age);
            this.formUserGeneralData
              .get("weight")
              ?.patchValue(res.response?.weight);
            this.formUserGeneralData
              .get("height")
              ?.patchValue(res.response?.height);
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

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserData = {
      user: this.user?.value,
      name: this.name?.value,
      lastName: this.lastName?.value,
      IdType: this.IdType?.value,
      IdNumber: this.IdNumber?.value,
      genre: this.genre?.value,
      age: this.age?.value,
      weight: this.weight?.value,
      height: this.height?.value,
    };
    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._userDataService
      .update(this._statusService.getUserId(), data)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            console.log("XXX - GeneralDataComponent - _callService - res", res);
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
