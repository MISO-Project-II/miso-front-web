import { ICity } from "./../../../models/general/countryStateCity.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
import { SportProfileService } from "src/services/profile/sport-profile.service";
import { TranslateService } from "@ngx-translate/core";

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

  public sportPracticeList: ISports[] | null = [];
  public sportPreferenceList: ISports[] | null = [];

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
    private _translateService: TranslateService,
    private _router: Router,
    private _statusService: StatusService,
    private _userRegisterService: UserRegisterService,
    private _sportsService: SportsService,
    private _ubicationService: UbicationService,
    private _sportProfileService: SportProfileService
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
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      IdType: new FormControl("", [Validators.required]),
      IdNumber: new FormControl("", [Validators.required]),
      // Datos deportivos
      sportPractice: new FormControl([]),
      sportInterest: new FormControl([]),
      // Datos secundarios
      genre: new FormControl("", [Validators.required]),
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
  get _sportsServiceGetAll$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  private _loadSports(): void {
    this._sportsServiceGetAll$.pipe(takeUntil(this._destroy$)).subscribe({
      next: (data: IResSports) => {
        if (data && data.success && data.result && data.result.length > 0) {
          this.sportPracticeList = data.result.filter(
            (s) => s.sportType == "SPORTS_PRACTICE"
          );
          this.sportPreferenceList = data.result.filter(
            (s) => s.sportType == "SPORTS_INTEREST"
          );
        }
      },
      error: () => {},
    });
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
    this._countryCodeOfResidence = await this._ubicationService.getCountry(
      countryCode.iso2
    );
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
    const data: IUserRegister = {
      // Datos principales
      username: this.user?.value,
      password: this.pass?.value,
      // confirmation: this.confirmation?.value,
      name: this.name?.value,
      lastName: this.lastName?.value,
      identificationType: this.IdType?.value,
      identificationNumber: this.IdNumber?.value,
      // Datos secundarios
      gender: this.genre?.value,
      age: this.age?.value,
      weight: this.weight?.value,
      height: this.height?.value,
      // Datos de ubicacion
      birthdUbication:
        this.countryOfBirth?.value.iso2 +
        "-" +
        this.stateOfBirth?.value.iso2 +
        "-" +
        this.cityOfBirth?.value.id +
        "-" +
        this._countryCodeOfBirth.currency,
      homeUbication:
        this.countryOfResidence?.value.iso2 +
        "-" +
        this.stateOfResidence?.value.iso2 +
        "-" +
        this.cityOfResidence?.value.id +
        "-" +
        this._countryCodeOfResidence.currency +
        "-" +
        this.montsOfResidence?.value,
      isVegan: this.isVegan ? 1 : 0,
      isvegetarian: this.isVegetarian ? 1 : 0,
      userType: SPORTSMAN,
    };
    this._createUserRegisterService(data);
  }

  private _createUserRegisterService(data: IUserRegister): void {
    this._statusService.spinnerShow();
    this._userRegisterService
      .create(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserRegister) => {
          console.log(
            "???? XXX - UserRegisterComponent - _createUserRegisterService - res : ",
            res
          );
          if (!!res && res.success) {
            let listSports = (
              (this.sportPractice?.value as ISports[]) || []
            ).map((s) => s.idsports);
            listSports = listSports.concat(
              ((this.sportInterest?.value as ISports[]) || []).map(
                (s) => s.idsports
              )
            );
            this._putSportsByUser(res.result!, listSports);
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err: any) => {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  public addSportPractice(item: ISports): void {
    if (!this.listSportPractice.find((s) => s.idsports == item.idsports)) {
      this.listSportPractice.push(item);
    }
    this.sportPractice?.patchValue(this.listSportPractice);
  }
  public delSportPractice(item: ISports): void {
    this.listSportPractice = this.listSportPractice.filter(
      (data) => data.idsports != item.idsports
    );
    this.sportPractice?.patchValue(this.listSportPractice);
  }
  public addSportInterest(item: any): void {
    if (!this.listSportInterest.find((s) => s.idsports == item.idsports)) {
      this.listSportInterest.push(item);
    }
    this.sportInterest?.patchValue(this.listSportInterest);
  }
  public delSportInterest(item: any): void {
    this.listSportInterest = this.listSportInterest.filter(
      (data) => data.idsports != item.idsports
    );
    this.sportInterest?.patchValue(this.listSportInterest);
  }
  private _putSportsByUser(idUser: number, listSports: number[]): void {
    this._statusService.spinnerShow();
    this._sportProfileService.putSportsByUser(idUser, listSports).subscribe(
      (data) => {
        // XXX Validar rta
        if (!!data) {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          this._router.navigate([ROOT_ROUTES_NAMES.USER_LOGIN]);
          this._statusService.spinnerHide();
          this._statusService.toastSuccess(
            this._translateService.instant("TOAST.CREATE")
          );
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err: any) => {
        this._statusService.toastError(
          this._translateService.instant("TOAST.ERROR")
        );
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
}
