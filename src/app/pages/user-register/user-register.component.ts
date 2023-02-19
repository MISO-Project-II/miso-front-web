import { ICity } from "./../../../models/general/countryStateCity.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";
import {
  IResUserRegister,
  IUserRegister,
} from "src/models/register/user-register.interface";
import { UserRegisterService } from "src/services/register/user-register.service";
import { SportsService } from "src/services/general/sports.service";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResSports, ISports } from "src/models/general/sports.interface";
import {
  ICountry,
  IState,
} from "src/models/general/countryStateCity.interface";
import { StatusModel } from "src/models/local/status-model";
import { SPORTSMAN } from "src/constanst/data.constants";
import { UbicationService } from "src/services/general/ubication.service";
import { ROOT_ROUTES_NAMES } from "src/app/app.routing";

@Component({
  selector: "app-user-register",
  templateUrl: "./user-register.component.html",
  styleUrls: ["./user-register.component.scss"],
})
export class UserRegisterComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
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
  public sportList: ISports[];
  public isVegan: boolean = false;
  public isVegetarian: boolean = false;
  constructor(
    private _router: Router,
    private _statusService: StatusService,
    private _userRegisterService: UserRegisterService,
    private _sportsService: SportsService,
    private _ubicationService: UbicationService
  ) {}

  ngOnInit() {
    this._statusService.setUserType(SPORTSMAN);
    this._initForm();
    this.getCountriesOfBirth();
    this.getCountriesOfResidence();
    this._loadSports();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
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
      sportPractice: new FormControl([]),
      sportInterest: new FormControl([]),
      // Datos secundarios
      genre: new FormControl("", [Validators.required]),
      // age: new FormControl("", [Validators.required, Validators.pattern("^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$")]),
      age: new FormControl("", [Validators.required]),
      weight: new FormControl("", [
        Validators.required,
        Validators.max(999),
        Validators.min(0),
        Validators.maxLength(3),
        Validators.minLength(1),
      ]),
      height: new FormControl("", [
        Validators.required,
        Validators.max(999),
        Validators.min(0),
        Validators.maxLength(3),
        Validators.minLength(1),
      ]),
      // Datos de ubicacion
      countryOfBirth: new FormControl("", [Validators.required]),
      stateOfBirth: new FormControl("", [Validators.required]),
      cityOfBirth: new FormControl("", [Validators.required]),
      countryOfResidence: new FormControl("", [Validators.required]),
      stateOfResidence: new FormControl("", [Validators.required]),
      cityOfResidence: new FormControl("", [Validators.required]),
      montsOfResidence: new FormControl("", [Validators.required]),
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
  get montsOfResidence() {
    return this.formUserRegister.get("montsOfResidence");
  }
  get getSportsService$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  private _loadSports(): void {
    this.getSportsService$
      .pipe(takeUntil(this._destroy$))
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResSports) => {
          if (res.success) {
            this.sportList = res.result!;
            console.log("XXX - UserRegisterComponent - ngOnInit - res", res);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private async getCountriesOfBirth() {
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.countriesOfBirth = await this._ubicationService.getCountries();
    await console.log(
      "XXX - HelperComponent - ngOnInit - this.countries ",
      this.countriesOfBirth
    );
  }
  public async getStatesOfBirth(countryCode: ICountry) {
    this._countryCodeOfBirth = countryCode;
    this.statesOfBirth = [];
    this.citiesOfBirth = [];
    this.statesOfBirth = await this._ubicationService.getStatesByCountry(
      countryCode.iso2
    );
  }
  public async getCitiesOfBirth(stateCode: IState) {
    this.citiesOfBirth = await this._ubicationService.getCitiesBtStateByCountry(
      this._countryCodeOfBirth.iso2,
      stateCode.iso2
    );
  }
  private async getCountriesOfResidence() {
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.countriesOfResidence = await this._ubicationService.getCountries();
  }
  public async getStatesOfResidence(countryCode: ICountry) {
    this._countryCodeOfResidence = countryCode;
    this.statesOfResidence = [];
    this.citiesOfResidence = [];
    this.statesOfResidence = await this._ubicationService.getStatesByCountry(
      countryCode.iso2
    );
  }
  public async getCitiesOfResidence(stateCode: IState) {
    this.citiesOfResidence =
      await this._ubicationService.getCitiesBtStateByCountry(
        this._countryCodeOfResidence.iso2,
        stateCode.iso2
      );
  }

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserRegister = {
      // Datos principales
      username: this.user?.value,
      password: this.pass?.value,
      // confirmation: this.confirmation?.value,
      name: this.name?.value,
      lastName: this.lastName?.value,
      identificationType: this.IdType?.value,
      identificationNumber: this.IdNumber?.value,
      // Datos deportivos
      // sportPractice: this.sportPractice?.value,
      // sportInterest: this.sportInterest?.value,
      // Datos secundarios
      gender: this.genre?.value,
      age: "1991-11-16",
      weight: this.weight?.value,
      height: this.height?.value,
      // Datos de ubicacion
      // countryOfBirth: this.countryOfBirth?.value,
      // stateOfBirth: this.stateOfBirth?.value,
      birthdUbication: this.cityOfBirth?.value.id,
      // countryOfResidence: this.countryOfResidence?.value,
      // stateOfResidence: this.stateOfResidence?.value,
      homeUbication: this.cityOfResidence?.value.id,
      // montsOfResidence: this.montsOfResidence?.value,
      isVegan: this.isVegan ? 1 : 0,
      isvegetarian: this.isVegetarian ? 1 : 0,
      userType: SPORTSMAN,
    };
    this._createUserRegisterService(data);
  }

  private _createUserRegisterService(data: IUserRegister): void {
    console.log(
      "XXX - UserRegisterComponent - _createUserRegisterService - data",
      JSON.stringify(data)
    );

    this._userRegisterService
      .create(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserRegister) => {
          console.log(
            "XXX - UserRegisterComponent - this._userRegisterService.create - res",
            res
          );

          if (res.success) {
            this._router.navigate([ROOT_ROUTES_NAMES.USER_LOGIN]);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  public addSportPractice(item: ISports): void {
    this.listSportPractice.push(item);
    this.listSportPractice = [...new Set(this.listSportPractice)];
    this.formUserRegister
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public delSportPractice(item: ISports): void {
    this.listSportPractice = this.listSportPractice.filter(
      (data) => data.idsports != item.idsports
    );
    this.formUserRegister
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public addSportInterest(item: ISports): void {
    this.listSportInterest.push(item);
    this.listSportInterest = [...new Set(this.listSportInterest)];
    this.formUserRegister
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
  public delSportInterest(item: ISports): void {
    this.listSportInterest = this.listSportInterest.filter(
      (data) => data.idsports != item.idsports
    );
    this.formUserRegister
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
}
