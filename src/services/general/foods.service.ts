import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqFoods,
  IResFoods,
  IFoods,
} from "src/models/general/foods.interface";
import {
  MockResErrorFoods,
  MockResSuccessGetAllFoods,
  MockResSuccessGetFoods,
  MockResSuccessFoods,
} from "src/test/general/foods.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de alimentos
 */
export class FoodsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.foods;
  }
  getAll(): Observable<IResFoods> {
    // return this._http.get<IResFoods>(this._baseUrl);
    const mock = of(MockResSuccessGetAllFoods);
    // const mock = of(MockResErrorFoods);
    return mock;
  }
  get(idData: number): Observable<IResFoods> {
    // return this._http.get<IResFoods>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetFoods);
    // const mock = of(MockResErrorFoods);
    return mock;
  }
  create(data: IFoods): Observable<IResFoods> {
    // const req: IReqFoods = { request: data, date: new Date() };
    // return this._http.post<IResFoods>(this._baseUrl, req);
    const mock = of(MockResSuccessFoods);
    // const mock = of(MockResErrorFoods);
    return mock;
  }
  update(idData: number, data: IFoods): Observable<IResFoods> {
    // const req: IReqFoods = { request: data, date: new Date() };
    // return this._http.put<IResFoods>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessFoods);
    // const mock = of(MockResErrorFoods);
    return mock;
  }
  delete(idData: number): Observable<IResFoods> {
    // return this._http.delete<IResFoods>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessFoods);
    // const mock = of(MockResErrorFoods);
    return mock;
  }
}
