import { Component, OnInit } from "@angular/core";
import { UbicationService } from "src/services/general/ubication.service";

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
  constructor(private _ubicationService: UbicationService) {
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
    this.countries = await this._ubicationService.getCountries();
  }
  private async getCountry(countryCode: string) {
    this.country = await this._ubicationService.getCountry(countryCode);
  }
  private async getStates(countryCode: string) {
    this.states = await this._ubicationService.getStatesByCountry(countryCode);
  }
  private async getCities(countryCode: string, cityCode: string) {
    this.cities = await this._ubicationService.getCitiesBtStateByCountry(
      countryCode,
      cityCode
    );
  }
  private async getCitiesByCountry(countryCode: string) {
    this.citiesByContry = await this._ubicationService.getCitiesByCountry(
      countryCode
    );
  }

  public changeLang(value: string): void {
    localStorage.setItem("lang", value);
    window.location.reload();
  }
}
