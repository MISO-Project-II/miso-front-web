import { ICity } from "./../../../models/general/countryStateCity.interface";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";
import { IUserRegister } from "src/models/register/user-register.interface";
import { UserRegisterService } from "src/services/register/user-register.service";
import { SportsService } from "src/services/general/sports.service";
import { Observable } from "rxjs";
import { IResSports, ISports } from "src/models/general/sports.interface";
import { CountryStateCityService } from "src/services/general/country-state-city.service";
import {
  ICountry,
  IState,
} from "src/models/general/countryStateCity.interface";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"],
})
export class UserRegisterComponent implements OnInit {
  public formUserRegister: FormGroup;
  public listSportPractice: ISports[] = [];
  public listSportInterest: ISports[] = [];
  public countriesOfBirth: ICountry[];
  private _countryCodeOfBirth: ICountry;
  public statesOfBirth: IState[];
  public citiesOfBirth: ICity[];
  public countriesOfResidence: ICountry[];
  private _countryCodeOfResidence: ICountry;
  public statesOfResidence: IState[];
  public citiesOfResidence: ICity[];
  constructor(
    private _router: Router,
    private _statusService: StatusService,
    private _userRegisterService: UserRegisterService,
    private _sportsService: SportsService,
    private _countryStateCityService: CountryStateCityService
  ) {}

  ngOnInit() {
    this._statusService.setIsUser(true);
    this._initForm();
    this.getCountriesOfBirth();
    this.getCountriesOfResidence();
  }
  private _initForm(): void {
    this.formUserRegister = new FormGroup({
      // Datos principales
      user: new FormControl("", [Validators.required]),
      pass: new FormControl("", [Validators.required]),
      confirmation: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      IdType: new FormControl("", [Validators.required]),
      IdNumber: new FormControl("", [Validators.required]),
      // Datos deportivos
      sportPractice: new FormControl("", [Validators.required]),
      sportInterest: new FormControl("", [Validators.required]),
      // Datos secundarios
      genre: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
      // Datos de ubicacion
      countryOfBirth: new FormControl("", [Validators.required]),
      stateOfBirth: new FormControl("", [Validators.required]),
      cityOfBirth: new FormControl("", [Validators.required]),
      countryOfResidence: new FormControl("", [Validators.required]),
      stateOfResidence: new FormControl("", [Validators.required]),
      cityOfResidence: new FormControl("", [Validators.required]),
      yearsOfResidence: new FormControl("", [Validators.required]),
    });
  }
  get form() {
    return this.formUserRegister.controls;
  }
  get user() {
    return this.formUserRegister.get("user");
  }
  get pass() {
    return this.formUserRegister.get("pass");
  }
  get confirmation() {
    return this.formUserRegister.get("confirmation");
  }
  get name() {
    return this.formUserRegister.get("name");
  }
  get lastName() {
    return this.formUserRegister.get("lastName");
  }
  get IdType() {
    return this.formUserRegister.get("IdType");
  }
  get IdNumber() {
    return this.formUserRegister.get("IdNumber");
  }

  get sportPractice() {
    return this.formUserRegister.get("sportPractice");
  }
  get sportInterest() {
    return this.formUserRegister.get("sportInterest");
  }

  get genre() {
    return this.formUserRegister.get("genre");
  }
  get age() {
    return this.formUserRegister.get("age");
  }
  get weight() {
    return this.formUserRegister.get("weight");
  }
  get height() {
    return this.formUserRegister.get("height");
  }

  get countryOfBirth() {
    return this.formUserRegister.get("countryOfBirth");
  }
  get stateOfBirth() {
    return this.formUserRegister.get("stateOfBirth");
  }
  get cityOfBirth() {
    return this.formUserRegister.get("cityOfBirth");
  }
  get countryOfResidence() {
    return this.formUserRegister.get("countryOfResidence");
  }
  get stateOfResidence() {
    return this.formUserRegister.get("stateOfResidence");
  }
  get cityOfResidence() {
    return this.formUserRegister.get("cityOfResidence");
  }
  get yearsOfResidence() {
    return this.formUserRegister.get("yearsOfResidence");
  }

  get sportsServiceGetAll$(): Observable<IResSports> {
    return this._sportsService.getAll();
  }

  private async getCountriesOfBirth() {
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.countriesOfBirth = await this._countryStateCityService.getCountries();
    await console.log(
      "XXX - HelperComponent - ngOnInit - this.countries ",
      this.countriesOfBirth
    );
  }
  public async getStatesOfBirth(countryCode: ICountry) {
    this._countryCodeOfBirth = countryCode;
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.statesOfBirth = await this._countryStateCityService.getStatesByCountry(
      countryCode.iso2
    );
  }
  public async getCitiesOfBirth(stateCode: IState) {
    this.citiesOfBirth =
      await this._countryStateCityService.getCitiesBtStateByCountry(
        this._countryCodeOfBirth.iso2,
        stateCode.iso2
      );
  }
  private async getCountriesOfResidence() {
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.countriesOfResidence =
      await this._countryStateCityService.getCountries();
  }
  public async getStatesOfResidence(countryCode: ICountry) {
    this._countryCodeOfResidence = countryCode;
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.statesOfResidence =
      await this._countryStateCityService.getStatesByCountry(countryCode.iso2);
  }
  public async getCitiesOfResidence(stateCode: IState) {
    this.citiesOfResidence =
      await this._countryStateCityService.getCitiesBtStateByCountry(
        this._countryCodeOfResidence.iso2,
        stateCode.iso2
      );
  }

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserRegister = {
      // Datos principales
      user: this.user?.value,
      pass: this.pass?.value,
      confirmation: this.confirmation?.value,
      name: this.name?.value,
      lastName: this.lastName?.value,
      IdType: this.IdType?.value,
      IdNumber: this.IdNumber?.value,
      // Datos deportivos
      sportPractice: this.sportPractice?.value,
      sportInterest: this.sportInterest?.value,
      // Datos secundarios
      genre: this.genre?.value,
      age: this.age?.value,
      weight: this.weight?.value,
      height: this.height?.value,
      // Datos de ubicacion
      countryOfBirth: this.countryOfBirth?.value,
      stateOfBirth: this.stateOfBirth?.value,
      cityOfBirth: this.cityOfBirth?.value,
      countryOfResidence: this.countryOfResidence?.value,
      stateOfResidence: this.stateOfResidence?.value,
      cityOfResidence: this.cityOfResidence?.value,
      yearsOfResidence: this.yearsOfResidence?.value,
    };
    this._createUserRegisterService(data);
  }

  private _createUserRegisterService(data: IUserRegister): void {
    this._userRegisterService.create(data).subscribe({
      next: (res) => {
        console.log(
          "XXX - UserRegisterComponent - this._userRegisterService.create - res",
          res
        );
        if (res.success) {
          this._router.navigate([
            this._statusService.getUrlUser() + ROUTES_NAMES.HOME,
          ]);
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
  public addSportPractice(item: any): void {
    this.listSportPractice.push(item);
    this.listSportPractice = [...new Set(this.listSportPractice)];
    this.formUserRegister
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public delSportPractice(item: any): void {
    this.listSportPractice = this.listSportPractice.filter(
      (data) => data.id != item.id
    );
    this.formUserRegister
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public addSportInterest(item: any): void {
    this.listSportInterest.push(item);
    this.listSportInterest = [...new Set(this.listSportInterest)];
    this.formUserRegister
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
  public delSportInterest(item: any): void {
    this.listSportInterest = this.listSportInterest.filter(
      (data) => data.id != item.id
    );
    this.formUserRegister
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
}
