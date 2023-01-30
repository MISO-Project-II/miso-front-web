import { Component, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { IResAllergies } from "src/models/general/allergies.interface";
import { AllergiesService } from "src/services/general/allergies.service";
import { CountryStateCityService } from "src/services/general/country-state-city.service";

@Component({
  selector: "app-helper",
  templateUrl: "./helper.component.html",
  styleUrls: ["./helper.component.scss"],
})
export class HelperComponent implements OnInit {
  public lang: string = "es";
  public countries: any;
  public country: any;
  public states: any;
  public cities: any;
  public citiesByContry: any;
  constructor(
    private _countryStateCityService: CountryStateCityService,
    private _allergiesService: AllergiesService
  ) {
    this.lang = localStorage.getItem("lang") || "es";
  }

  ngOnInit(): void {
    this.lang;

    this.getCountries();
    this.getCountry("CO");
    this.getStates("CO");
    this.getCities("CO", "BOY");
    this.getCitiesByCountry("CO");
  }

  private async getCountries() {
    this.countries = await this._countryStateCityService.getCountries();
    await console.log(
      "XXX - HelperComponent - ngOnInit - this.countries ",
      this.countries
    );
  }
  private async getCountry(countryCode: string) {
    this.country = await this._countryStateCityService.getCountry(countryCode);
  }
  private async getStates(countryCode: string) {
    // this.states = await this._countryStateCityService.getStatesByCountry(countryCode);
    console.log("XXX- se llamo states::: ", countryCode);
    this.states = await this._countryStateCityService.getStatesByCountry(
      countryCode
    );
    await console.log(
      "XXX - UserRegisterComponent - getStates - this.states",
      this.states
    );
  }
  private async getCities(countryCode: string, cityCode: string) {
    this.cities = await this._countryStateCityService.getCitiesBtStateByCountry(
      countryCode,
      cityCode
    );
  }
  private async getCitiesByCountry(countryCode: string) {
    this.citiesByContry =
      await this._countryStateCityService.getCitiesByCountry(countryCode);
  }

  get allergiesServiceGetAll$(): Observable<IResAllergies> {
    return this._allergiesService.getAll();
  }
  get allergiesServiceGet$(): Observable<IResAllergies> {
    const idSelect = 1;
    return this._allergiesService.get(idSelect);
  }

  public changeLang(value: string): void {
    localStorage.setItem("lang", value);
    window.location.reload();
  }
}
