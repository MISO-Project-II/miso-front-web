import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResSuggestionRoutes } from "src/models/suggestions/suggestion-routes.interface";
import {
  MockResErrorSuggestionRoutes,
  MockResSuccessGetSuggestionRoutes,
} from "src/test/suggestions/suggestion-routes.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Sugerencias de rutas de usuario
 */
export class SuggestionsRoutesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.suggestions_routes;
    // this._baseUrl =  "http://localhost:3000/SuggestionRoutes";
  }
  get(idUser: number): Observable<IResSuggestionRoutes> {
    // return this._http.get<IResSuggestionRoutes>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetSuggestionRoutes);
    // const mock = of(MockResErrorSuggestionRoutes);
    return mock;
  }
}
