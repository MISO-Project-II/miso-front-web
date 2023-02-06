import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqSports,
  IResSports,
  ISports,
} from "src/models/general/sports.interface";
import {
  MockResErrorSports,
  MockResSuccessGetAllSports,
  MockResSuccessGetSports,
  MockResSuccessSports,
} from "src/test/general/sports.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de deportes
 */
export class SportsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sports;
    // this._baseUrl =  "http://localhost:3000/sports";
  }
  getAll(): Observable<IResSports> {
    // return this._http.get<IResSports>(this._baseUrl);
    const mock = of(MockResSuccessGetAllSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
  get(idData: number): Observable<IResSports> {
    // return this._http.get<IResSports>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
  create(data: ISports): Observable<IResSports> {
    // const req: IReqSports = { request: data, date: new Date() };
    // return this._http.post<IResSports>(this._baseUrl, req);
    const mock = of(MockResSuccessSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
  update(idData: number, data: ISports): Observable<IResSports> {
    // const req: IReqSports = { request: data, date: new Date() };
    // return this._http.put<IResSports>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
  delete(idData: number): Observable<IResSports> {
    // return this._http.delete<IResSports>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
}
