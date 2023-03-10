import { formatDate } from "@angular/common";
import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { Subject, takeUntil } from "rxjs";
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
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit() {
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
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getUserId$() {
    return this._statusService?.getGeneralStatus().userId;
  }
  get getToken$() {
    return this._statusService?.getGeneralStatus().token;
  }
  get getUserName$() {
    return this._statusService?.getGeneralStatus().username;
  }
  get getUser$() {
    return this._statusService?.getUser();
  }

  private _loadGeneralData(): void {
    setTimeout(() => {
      this.formUserGeneralData
        .get("user")
        ?.patchValue(this.getGeneralStatus$?.username);
      this.formUserGeneralData
        .get("name")
        ?.patchValue(this.getGeneralStatus$?.name);
      this.formUserGeneralData
        .get("lastName")
        ?.patchValue(this.getGeneralStatus$?.lastName);
      this.formUserGeneralData
        .get("IdType")
        ?.patchValue(this.getGeneralStatus$?.idIdentificationType);
      this.formUserGeneralData
        .get("IdNumber")
        ?.patchValue(this.getGeneralStatus$?.identificationNumber);
      this.formUserGeneralData
        .get("genre")
        ?.patchValue(this.getGeneralStatus$?.gender);
      let bornDate = new Date(this.getGeneralStatus$?.age || "");
      this.formUserGeneralData
        .get("age")
        ?.patchValue(formatDate(bornDate, "yyyy-MM-dd", "en"));
      this.formUserGeneralData
        .get("weight")
        ?.patchValue(this.getGeneralStatus$?.weight);
      this.getHeight?.patchValue((this.getGeneralStatus$?.height || 0) * 100);
    }, 200);
    this._statusService.spinnerHide();
  }

  public onSubmitGeneralData(): void {
    const data: IUserData = {
      username: this.getUser?.value
        ? this.getUser?.value
        : this.getGeneralStatus$.username,
      name: this.getName?.value
        ? this.getName?.value
        : this.getGeneralStatus$.name,
      lastName: this.getLastName?.value
        ? this.getLastName?.value
        : this.getGeneralStatus$.lastName,
      idIdentificationType: this.getIdType?.value
        ? this.getIdType?.value
        : this.getGeneralStatus$.idIdentificationType,
      identificationNumber: this.getIdNumber?.value
        ? this.getIdNumber?.value
        : this.getGeneralStatus$.identificationNumber,
      birthdUbication: this.getGeneralStatus$.birthdUbication,
      homeUbication: this.getGeneralStatus$.homeUbication,
      gender: this.getGenre?.value
        ? this.getGenre?.value
        : this.getGeneralStatus$.gender,
      age: this.getAge?.value ? this.getAge?.value : this.getGeneralStatus$.age,
      weight: this.getWeight?.value
        ? this.getWeight?.value
        : this.getGeneralStatus$.weight,
      height: this.getHeight?.value
        ? this.getHeight?.value / 100
        : this.getGeneralStatus$.height,
      // height: this.getHeight?.value
      //   ? (this.getHeight?.value || 0) / 100
      //   : this.getGeneralStatus$.height,
      userPlan: this.getGeneralStatus$.contractType,
      isVegan: this.getGeneralStatus$.isVegan,
      isvegetarian: this.getGeneralStatus$.isvegetarian,
      imc: this.getGeneralStatus$.imc,
      idSportPlan: this.getGeneralStatus$.idSportPlan
        ? this.getGeneralStatus$.idSportPlan
        : 0,
      idFoodPlan: this.getGeneralStatus$.idFoodPlan
        ? this.getGeneralStatus$.idFoodPlan
        : 0,
    };
    console.log(
      "???? XXX - GeneralDataComponent - onSubmitGeneralData - data : ",
      data
    );

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
              "???? XXX - GeneralDataComponent - _callService - res : ",
              res
            );
            // setTimeout(() => {
            //   window.dispatchEvent(new CustomEvent("updateGeneralData"));
            setTimeout(() => {
              this._statusService.setUserId(this.getUserId$);
              this._statusService.setToken(this.getToken$);
              this._statusService.setUserName(this.getUserName$);
              this._statusService.setUserData(this.getUser$);

              this._statusService.setName(res.result?.name!);
              this._statusService.setLastName(res.result?.lastName!);
              this._statusService.setIdIdentificationType(
                res.result?.idIdentificationType!
              );
              this._statusService.setIdentificationNumber(
                res.result?.identificationNumber!
              );
              this._statusService.setBirthdUbication(
                res.result?.birthdUbication!
              );
              this._statusService.setHomeUbication(res.result?.homeUbication!);
              this._statusService.setGender(res.result?.gender!);
              this._statusService.setWeight(res.result?.weight!);
              this._statusService.setAge(res.result?.age!);
              this._statusService.setHeight(res.result?.height!);
              this._statusService.setIsVegan(res.result?.isVegan!);
              this._statusService.setIsvegetarian(res.result?.isvegetarian!);
              this._statusService.setIMC(res.result?.imc!);
              this._statusService.setContractType(res.result?.userPlan!);
              this._statusService.setIdSportPlan(res.result?.idSportPlan!);
              this._statusService.setIdFoodPlan(res.result?.idFoodPlan!);
            }, 200);
            // }, 100);
            this._statusService.spinnerHide();
            this._statusService.toastSuccess(
              this._translateService.instant("TOAST.UPDATE")
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

  // @HostListener("window:updateGeneralData")
  // updateGeneralData() {
  //   this._loadGeneralData();
  // }
}
