import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { StatusModel } from "src/models/local/status-model";
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
    console.log("XXX - GeneralDataComponent");
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
  get getForm() {
    return this.formUserGeneralData.controls;
  }
  get getUser() {
    return this.formUserGeneralData.get("user");
  }
  get getName() {
    return this.formUserGeneralData.get("name");
  }
  get getLastName() {
    return this.formUserGeneralData.get("lastName");
  }
  get getIdType() {
    return this.formUserGeneralData.get("IdType");
  }
  get getIdNumber() {
    return this.formUserGeneralData.get("IdNumber");
  }
  get getGenre() {
    return this.formUserGeneralData.get("genre");
  }
  get getAge() {
    return this.formUserGeneralData.get("age");
  }
  get getWeight() {
    return this.formUserGeneralData.get("weight");
  }
  get getHeight() {
    return this.formUserGeneralData.get("height");
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }

  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (res.success) {
            console.log("XXX - GeneralDataComponent - _loadData - res", res);
            this.formUserGeneralData
              .get("user")
              ?.patchValue(res.result?.username);
            this.formUserGeneralData.get("name")?.patchValue(res.result?.name);
            this.formUserGeneralData
              .get("lastName")
              ?.patchValue(res.result?.lastName);
            this.formUserGeneralData
              .get("IdType")
              ?.patchValue(res.result?.idIdentificationType);
            this.formUserGeneralData
              .get("IdNumber")
              ?.patchValue(res.result?.identificationNumber);
            this.formUserGeneralData
              .get("genre")
              ?.patchValue(res.result?.gender);
            this.formUserGeneralData.get("age")?.patchValue(res.result?.age);
            this.formUserGeneralData
              .get("weight")
              ?.patchValue(res.result?.weight);
            this.formUserGeneralData
              .get("height")
              ?.patchValue(res.result?.height);
            setTimeout(() => {
              this._statusService.spinnerHide();
            }, 500);
          }
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserData = {
      username: this.getUser?.value,
      name: this.getName?.value,
      lastName: this.getLastName?.value,
      idIdentificationType: this.getIdType?.value,
      identificationNumber: this.getIdNumber?.value,
      gender: this.getGenre?.value,
      age: this.getAge?.value,
      weight: this.getWeight?.value,
      height: this.getHeight?.value,
    };
    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._userDataService
      .update(this.getGeneralStatus.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (res.success) {
            console.log("XXX - GeneralDataComponent - _callService - res", res);
            this._loadData();
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
