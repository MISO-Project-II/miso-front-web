import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqIntolerances,
  IResIntolerances,
  IIntolerances,
} from "src/models/general/intolerances.interface";
import {
  MockResErrorIntolerances,
  MockResSuccessGetAllIntolerances,
  MockResSuccessGetIntolerances,
  MockResSuccessIntolerances,
} from "src/test/general/intolerances.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de intolerancias
 */
export class IntolerancesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.intolerances;
  }
  getAll(): Observable<IResIntolerances> {
    // return this._http.get<IResIntolerances>(this._baseUrl);
    const mock = of(MockResSuccessGetAllIntolerances);
    // const mock = of(MockResErrorIntolerances);
    return mock;
  }
  get(idData: number): Observable<IResIntolerances> {
    // return this._http.get<IResIntolerances>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetIntolerances);
    // const mock = of(MockResErrorIntolerances);
    return mock;
  }
  create(data: IIntolerances): Observable<IResIntolerances> {
    // const req: IReqIntolerances = { request: data, date: new Date() };
    // return this._http.post<IResIntolerances>(this._baseUrl, req);
    const mock = of(MockResSuccessIntolerances);
    // const mock = of(MockResErrorIntolerances);
    return mock;
  }
  update(idData: number, data: IIntolerances): Observable<IResIntolerances> {
    // const req: IReqIntolerances = { request: data, date: new Date() };
    // return this._http.put<IResIntolerances>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessIntolerances);
    // const mock = of(MockResErrorIntolerances);
    return mock;
  }
  delete(idData: number): Observable<IResIntolerances> {
    // return this._http.delete<IResIntolerances>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessIntolerances);
    // const mock = of(MockResErrorIntolerances);
    return mock;
  }
}
