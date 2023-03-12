import { formatDate } from "@angular/common";
import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
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
    this._loadGeneralData();
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
  get getAgeDate() {
    return new Date(this.getAge?.value);
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

  private _loadGeneralData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
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
            let bornDate = new Date(res.result?.age || "");
            this.formUserGeneralData
              .get("age")
              ?.patchValue(formatDate(bornDate, "yyyy-MM-dd", "en"));
            this.formUserGeneralData
              .get("weight")
              ?.patchValue(res.result?.weight);
            this.getHeight?.patchValue(
              ((res.result && res.result.height) || 0) * 100
            );
            this._statusService.spinnerHide();
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
      username: this.getUser?.value
        ? this.getUser?.value
        : this.getGeneralStatus.username,
      name: this.getName?.value
        ? this.getName?.value
        : this.getGeneralStatus.name,
      lastName: this.getLastName?.value
        ? this.getLastName?.value
        : this.getGeneralStatus.lastName,
      idIdentificationType: this.getIdType?.value
        ? this.getIdType?.value
        : this.getGeneralStatus.idIdentificationType,
      identificationNumber: this.getIdNumber?.value
        ? this.getIdNumber?.value
        : this.getGeneralStatus.identificationNumber,
      birthdUbication: this.getGeneralStatus.birthdUbication,
      homeUbication: this.getGeneralStatus.homeUbication,
      gender: this.getGenre?.value
        ? this.getGenre?.value
        : this.getGeneralStatus.gender,
      age: this.getAge?.value ? this.getAge?.value : this.getGeneralStatus.age,
      weight: this.getWeight?.value
        ? this.getWeight?.value
        : this.getGeneralStatus.weight,
      height: this.getHeight?.value
        ? (this.getHeight?.value || 0) / 100
        : this.getGeneralStatus.height,
      userPlan: this.getGeneralStatus.contractType,
      imc: this.getGeneralStatus.imc,
      idSportPlan: 0,
      idFoodPlan: 0,
    };
    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._userDataService
      .updateGeneralData(this.getGeneralStatus.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log("XXX - GeneralDataComponent - _callService - res", res);
            window.dispatchEvent(new CustomEvent("updateGeneralData"));
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }

  @HostListener("window:updateGeneralData")
  updateGeneralData() {
    this._loadGeneralData();
  }
}
