import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResSuggestionFoodPlan } from "src/models/suggestions/suggestion-food-plan.interface";
import {
  MockResErrorSuggestionFoodPlan,
  MockResSuccessGetSuggestionFoodPlan,
} from "src/test/suggestions/suggestion-food-plan.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Sugerencias de plan alimenticio de usuario
 */
export class SuggestionsFoodPlansService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl =
      environment.api.base + environment.api.suggestions_food_plans;
    // this._baseUrl =  "http://localhost:3000/SuggestionFoodPlan";
  }
  get(idUser: number): Observable<IResSuggestionFoodPlan> {
    // return this._http.get<IResSuggestionFoodPlan>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetSuggestionFoodPlan);
    // const mock = of(MockResErrorSuggestionFoodPlan);
    return mock;
  }
}
