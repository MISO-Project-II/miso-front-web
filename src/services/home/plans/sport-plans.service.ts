import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { ISportPlans } from "src/models/home/sport-plans.interface";

import { MockGetAllSportPlans } from "src/test/home/sport-plans.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de planes deportivos
 */
export class SportPlansService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    // this._baseUrl = environment.api.base + environment.api.sport_plans;
    this._baseUrl =
      "https://miso-back-sportplan-6equtupdiq-uc.a.run.app/sport-plan";
    this._httpHeaders = new HttpHeaders(environment.api.headers2);
  }
  getSportPlan(): Observable<ISportPlans[]> {
    // https://miso-back-food-6equtupdiq-uc.a.run.app/food-plan
    return this._http
      .get<ISportPlans[]>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("🚀 XXX - SportPlansService - catchError - err : ", err);
          return throwError(err);
        })
      );
    // const mock = of(MockGetAllSportPlans);
    // const mock = of(MockResErrorFoodPlans);
    // return mock;
  }
}
