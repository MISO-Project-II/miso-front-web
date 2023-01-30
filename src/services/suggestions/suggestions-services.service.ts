import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResSuggestionServices } from "src/models/suggestions/suggestion-services.interface";
import {
  MockResErrorSuggestionServices,
  MockResSuccessGetSuggestionServices,
} from "src/test/suggestions/suggestion-services.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Sugerencias de servicios de usuario
 */
export class SuggestionsServicesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.suggestions_services;
    // this._baseUrl =  "http://localhost:3000/SuggestionServices";
  }
  get(idUser: number): Observable<IResSuggestionServices> {
    // return this._http.get<IResSuggestionServices>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetSuggestionServices);
    // const mock = of(MockResErrorSuggestionServices);
    return mock;
  }
}
