import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResFoodPlans,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import {
  MockResErrorFoodPlans,
  MockResSuccessGetAllFoodPlans,
  // MockResSuccessGetFoodPlans,
  MockResSuccessFoodPlans,
} from "src/test/home/food-plans.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de planes alimenticios
 */
export class FoodPlansService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sports;
  }
  getFoodPlans(): Observable<IResFoodPlans> {
    // return this._http.get<IResFoodPlans>(this._baseUrl);
    const mock = of(MockResSuccessGetAllFoodPlans);
    // const mock = of(MockResErrorFoodPlans);
    return mock;
  }
  // get(idData: number): Observable<IResFoodPlans> {
  //   // return this._http.get<IResFoodPlans>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetFoodPlans);
  //   // const mock = of(MockResErrorFoodPlans);
  //   return mock;
  // }
  create(data: IFoodPlans): Observable<IResFoodPlans> {
    // const req: IReqFoodPlans = { request: data, date: new Date() };
    // return this._http.post<IResFoodPlans>(this._baseUrl, req);
    const mock = of(MockResSuccessFoodPlans);
    // const mock = of(MockResErrorFoodPlans);
    return mock;
  }
  update(idData: number, data: IFoodPlans): Observable<IResFoodPlans> {
    // const req: IReqFoodPlans = { request: data, date: new Date() };
    // return this._http.put<IResFoodPlans>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessFoodPlans);
    // const mock = of(MockResErrorFoodPlans);
    return mock;
  }
  delete(idData: number): Observable<IResFoodPlans> {
    // return this._http.delete<IResFoodPlans>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessFoodPlans);
    // const mock = of(MockResErrorFoodPlans);
    return mock;
  }
}
