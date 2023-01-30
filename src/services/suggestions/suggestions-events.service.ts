import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResSuggestionEvents } from "src/models/suggestions/suggestion-events.interface";
import {
  MockResErrorSuggestionEvents,
  MockResSuccessGetSuggestionEvents,
} from "src/test/suggestions/suggestion-events.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Sugerencias de eventos de usuario
 */
export class SuggestionsEventsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.suggestions_events;
    // this._baseUrl =  "http://localhost:3000/SuggestionEvents";
  }
  get(idUser: number): Observable<IResSuggestionEvents> {
    // return this._http.get<IResSuggestionEvents>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetSuggestionEvents);
    // const mock = of(MockResErrorSuggestionEvents);
    return mock;
  }
}
