import { ICountry } from "../../models/general/countryStateCity.interface";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de ubicación
 */
// https://countrystatecity.in/docs/api/all-countries/
// https://github.com/dr5hn/countries-states-cities-database
export class UbicationService {
  private _baseUrl: string;
  private _headers = new Headers();
  private _requestOptions: any;
  private _countries: any;
  private _country: any;
  private _states: any;
  private _statesByCountry: any;

  constructor() {
    this._baseUrl = "https://api.countrystatecity.in/v1/countries";
    this._headers.append("X-CSCAPI-KEY", environment.key_country_state_city);
    this._requestOptions = {
      method: "GET",
      headers: this._headers,
      redirect: "follow",
    };
  }
  async getCountries() {
    this._countries = await fetch(this._baseUrl, this._requestOptions).then(
      (response) => response.json()
    );
    return this._countries;
  }
  async getCountry(countryCode: string) {
    this._country = await fetch(
      this._baseUrl + "/" + countryCode,
      this._requestOptions
    );
    return this._country.json();
  }
  async getStatesByCountry(countryCode: string) {
    this._states = await fetch(
      this._baseUrl + "/" + countryCode + "/states",
      this._requestOptions
    );
    return this._states.json();
  }
  async getCitiesBtStateByCountry(countryCode: string, stateCode: string) {
    this._states = await fetch(
      this._baseUrl + "/" + countryCode + "/states/" + stateCode + "/cities",
      this._requestOptions
    );
    return this._states.json();
  }
  async getCitiesByCountry(countryCode: string) {
    this._statesByCountry = await fetch(
      this._baseUrl + "/" + countryCode + "/cities",
      this._requestOptions
    );
    return this._statesByCountry.json();
  }
  public getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
