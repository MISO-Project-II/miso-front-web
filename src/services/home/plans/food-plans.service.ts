import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IFoodPlans } from "src/models/home/food-plans.interface";
import { MockGetAllFoodPlans } from "src/test/home/food-plans.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de planes alimenticios
 */
export class FoodPlansService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    // this._baseUrl = environment.api.base + environment.api.food_plans;
    this._baseUrl = "https://miso-back-food-6equtupdiq-uc.a.run.app/food-plan";
    this._httpHeaders = new HttpHeaders(environment.api.headers2);
  }
  getFoodPlans(): Observable<IFoodPlans[]> {
    // https://miso-back-food-6equtupdiq-uc.a.run.app/food-plan
    return this._http
      .get<IFoodPlans[]>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("🚀 XXX - FoodPlansService - catchError - err : ", err);
          return throwError(err);
        })
      );
    // const mock = of(MockGetAllFoodPlans);
    // const mock = of(MockResErrorFoodPlans);
    // return mock;
  }
}
