import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqSportPlans,
  IResSportPlans,
  ISportPlans,
} from "src/models/home/sport-plans.interface";
import {
  MockResErrorSportPlans,
  MockResSuccessGetAllSportPlans,
  MockResSuccessGetSportPlans,
  MockResSuccessSportPlans,
} from "src/test/home/sport-plans.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de planes deportivos
 */
export class SportPlansService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.food_profile;
  }
  getAll(): Observable<IResSportPlans> {
    // return this._http.get<IResSportPlans>(this._baseUrl);
    const mock = of(MockResSuccessGetAllSportPlans);
    // const mock = of(MockResErrorSportPlans);
    return mock;
  }
  get(idData: number): Observable<IResSportPlans> {
    // return this._http.get<IResSportPlans>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetSportPlans);
    // const mock = of(MockResErrorSportPlans);
    return mock;
  }
  create(data: ISportPlans): Observable<IResSportPlans> {
    // const req: IReqSportPlans = { request: data, date: new Date() };
    // return this._http.post<IResSportPlans>(this._baseUrl, req);
    const mock = of(MockResSuccessSportPlans);
    // const mock = of(MockResErrorSportPlans);
    return mock;
  }
  update(idData: number, data: ISportPlans): Observable<IResSportPlans> {
    // const req: IReqSportPlans = { request: data, date: new Date() };
    // return this._http.put<IResSportPlans>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessSportPlans);
    // const mock = of(MockResErrorSportPlans);
    return mock;
  }
  delete(idData: number): Observable<IResSportPlans> {
    // return this._http.delete<IResSportPlans>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessSportPlans);
    // const mock = of(MockResErrorSportPlans);
    return mock;
  }
}
