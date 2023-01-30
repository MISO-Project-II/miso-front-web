import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResSuggestionTrainingPlan } from "src/models/suggestions/suggestion-training-plan.interface";
import {
  MockResErrorSuggestionTrainingPlan,
  MockResSuccessGetSuggestionTrainingPlan,
} from "src/test/suggestions/suggestion-trainig-plan.mock";

@Injectable({
  providedIn: "root",
})
export class SuggestionsTrainingPlanService {
  /**
   * Sugerencias de plan de entrenamiento de usuario
   */
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl =
      environment.api.base + environment.api.suggestions_training_plan;
    // this._baseUrl =  "http://localhost:3000/SuggestionTrainingPlan";
  }
  get(idUser: number): Observable<IResSuggestionTrainingPlan> {
    // return this._http.get<IResSuggestionTrainingPlan>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetSuggestionTrainingPlan);
    // const mock = of(MockResErrorSuggestionTrainingPlan);
    return mock;
  }
}
