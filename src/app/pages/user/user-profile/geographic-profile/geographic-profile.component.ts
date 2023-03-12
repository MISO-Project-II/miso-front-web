import { formatDate } from "@angular/common";
import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subject, takeUntil } from "rxjs";
import {
  ICity,
  ICountry,
  IState,
} from "src/models/general/countryStateCity.interface";
import { ILocation } from "src/models/general/locantion.interface";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { UbicationService } from "src/services/general/ubication.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-geographic-profile",
  templateUrl: "./geographic-profile.component.html",
  styleUrls: ["./geographic-profile.component.scss"],
})
export class GeographicProfileComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  formUserGeographicProfile: FormGroup;
  public countriesOfBirth: ICountry[];
  public statesOfBirth: IState[];
  public citiesOfBirth: ICity[];
  private _countryCodeOfBirth: ICountry;
  public countriesOfResidence: ICountry[];
  private _countryCodeOfResidence: ICountry;
  public statesOfResidence: IState[];
  public citiesOfResidence: ICity[];
  private _birthUbication: ILocation;
  private _homeUbication: ILocation;

  constructor(
    private fb: FormBuilder,
    private _ubicationService: UbicationService,
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  async ngOnInit() {
    this._initForm();
    await this.getCountriesOfBirth();
    await this.getCountriesOfResidence();
    this._loadData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  private _initForm() {
    this.formUserGeographicProfile = this.fb.group({
      countryOfBirth: [null, [Validators.required]],
      stateOfBirth: [null, [Validators.required]],
      cityOfBirth: [null, [Validators.required]],
      countryOfResidence: [null, [Validators.required]],
      stateOfResidence: [null, [Validators.required]],
      cityOfResidence: [null, [Validators.required]],
      montsOfResidence: [null, [Validators.required]],
      age: [null, [Validators.required]],
      height: [null, [Validators.required]],
      weight: [null, [Validators.required]],
      imc: [null, [Validators.required]],
    });
  }

  get countryOfBirth() {
    return this.formUserGeographicProfile.get("countryOfBirth");
  }
  get stateOfBirth() {
    return this.formUserGeographicProfile.get("stateOfBirth");
  }
  get cityOfBirth() {
    return this.formUserGeographicProfile.get("cityOfBirth");
  }
  get countryOfResidence() {
    return this.formUserGeographicProfile.get("countryOfResidence");
  }
  get stateOfResidence() {
    return this.formUserGeographicProfile.get("stateOfResidence");
  }
  get cityOfResidence() {
    return this.formUserGeographicProfile.get("cityOfResidence");
  }
  get montsOfResidence() {
    return this.formUserGeographicProfile.get("montsOfResidence");
  }
  get age() {
    return this.formUserGeographicProfile.get("age");
  }
  get height() {
    return this.formUserGeographicProfile.get("height");
  }
  get weight() {
    return this.formUserGeographicProfile.get("weight");
  }
  get imc() {
    return this.formUserGeographicProfile.get("imc");
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }

  private async getCountriesOfBirth() {
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.countriesOfBirth = await this._ubicationService.getCountries();
  }
  public async getStatesOfBirth(countryCode: ICountry) {
    this._countryCodeOfBirth = await this._ubicationService.getCountry(
      countryCode.iso2
    );
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.statesOfBirth = await this._ubicationService.getStatesByCountry(
      countryCode.iso2
    );
    if (
      this._birthUbication &&
      this._birthUbication.country == countryCode.iso2
    ) {
      let state = this.statesOfBirth.find(
        (s) => s.iso2 == this._birthUbication.state
      );
      this.stateOfBirth?.patchValue(state);
    }
  }
  public async getCitiesOfBirth(stateCode: IState) {
    this.citiesOfBirth = await this._ubicationService.getCitiesBtStateByCountry(
      this._countryCodeOfBirth.iso2,
      stateCode.iso2
    );
    if (this._birthUbication && this._birthUbication.state == stateCode.iso2) {
      let city = this.citiesOfBirth.find(
        (c) => c.id == this._birthUbication.city
      );
      this.cityOfBirth?.patchValue(city);
    }
  }
  private async getCountriesOfResidence() {
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.countriesOfResidence = await this._ubicationService.getCountries();
  }
  public async getStatesOfResidence(countryCode: ICountry) {
    this._countryCodeOfResidence = await this._ubicationService.getCountry(
      countryCode.iso2
    );
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.statesOfResidence = await this._ubicationService.getStatesByCountry(
      countryCode.iso2
    );
    if (
      this._homeUbication &&
      this._homeUbication.country == countryCode.iso2
    ) {
      let state = this.statesOfResidence.find(
        (s) => s.iso2 == this._homeUbication.state
      );
      this.stateOfResidence?.patchValue(state);
    }
  }
  public async getCitiesOfResidence(stateCode: IState) {
    this.citiesOfResidence =
      await this._ubicationService.getCitiesBtStateByCountry(
        this._countryCodeOfResidence.iso2,
        stateCode.iso2
      );
    if (this._homeUbication && this._homeUbication.state == stateCode.iso2) {
      let city = this.citiesOfResidence.find(
        (c) => c.id == this._homeUbication.city
      );
      this.cityOfResidence?.patchValue(city);
    }
  }

  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus$.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - GeographicProfileComponent - _loadData - res : ",
              res
            );
            this.age?.patchValue(res.result?.age);
            this.weight?.patchValue(res.result?.weight);
            this.height?.patchValue(
              ((res.result && res.result.height) || 0) * 100
            );
            this.imc?.patchValue(res.result?.imc);
            this.setBirthdUbication(res.result?.birthdUbication);
            this.setHomeUbication(res.result?.homeUbication);
            let bornDate = new Date(res.result?.age || "");
            this.age?.patchValue(formatDate(bornDate, "yyyy-MM-dd", "en"));
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
  public setBirthdUbication(birthdUbication?: string) {
    if (birthdUbication) {
      this._birthUbication = {
        country: birthdUbication.split("-")[0],
        state: birthdUbication.split("-")[1],
        city: parseInt(birthdUbication.split("-")[2]),
        currency: birthdUbication.split("-")[3],
      };
      let country = this.countriesOfBirth.find(
        (c) => c.iso2 == this._birthUbication.country
      );
      this.countryOfBirth?.patchValue(country || null);
    }
  }
  public setHomeUbication(homeUbication?: string) {
    if (homeUbication) {
      this._homeUbication = {
        country: homeUbication.split("-")[0],
        state: homeUbication.split("-")[1],
        city: parseInt(homeUbication.split("-")[2]),
        currency: homeUbication.split("-")[3],
        monthsOfResidence: parseInt(homeUbication.split("-")[4]),
      };
      let country = this.countriesOfResidence.find(
        (c) => c.iso2 == this._homeUbication.country
      );
      this.countryOfResidence?.patchValue(country);
      this.montsOfResidence?.patchValue(this._homeUbication.monthsOfResidence);
    }
  }

  onSubmit() {
    if (this.formUserGeographicProfile.valid) {
      let countryOfBirthIso = (this.countryOfBirth?.value as ICountry).iso2;
      let stateOfBirthIso = (this.stateOfBirth?.value as IState).iso2;
      let cityOfBirthId = (this.cityOfBirth?.value as ICity).id;
      let countryOfResidenceIso = (this.countryOfResidence?.value as ICountry)
        .iso2;
      let stateOfResidenceIso = (this.stateOfResidence?.value as IState).iso2;
      let cityOfResidenceId = (this.cityOfResidence?.value as ICity).id;
      let _birthdUbication = `${countryOfBirthIso}-${stateOfBirthIso}-${cityOfBirthId}-${this._countryCodeOfBirth.currency}`;
      let _homeUbication = `${countryOfResidenceIso}-${stateOfResidenceIso}-${cityOfResidenceId}-${
        this._countryCodeOfResidence.currency
      }-${this.montsOfResidence?.value || 0}`;
      const data: IUserData = {
        username: this.getGeneralStatus$.username,
        name: this.getGeneralStatus$.name,
        lastName: this.getGeneralStatus$.lastName,
        idIdentificationType: this.getGeneralStatus$.idIdentificationType,
        identificationNumber: this.getGeneralStatus$.identificationNumber,
        birthdUbication: _birthdUbication,
        homeUbication: _homeUbication,
        gender: this.getGeneralStatus$.gender,
        age: this.age?.value,
        weight: this.weight?.value,
        height: (this.height?.value || 0) / 100,
        userPlan: this.getGeneralStatus$.contractType,
        isVegan: this.getGeneralStatus$?.isVegan,
        isvegetarian: this.getGeneralStatus$?.isvegetarian,
        imc: this.imc?.value,
        idSportPlan: this.getGeneralStatus$?.idSportPlan,
        idFoodPlan: this.getGeneralStatus$?.idFoodPlan,
      };
      this._callService(data);
    }
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
              "🚀 XXX - GeographicProfileComponent - _callService - res : ",
              res
            );
            window.dispatchEvent(new CustomEvent("updateGeneralData"));
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

  @HostListener("window:updateGeneralData")
  updateGeneralData() {
    this._loadData();
  }
}
