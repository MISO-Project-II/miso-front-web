import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqDisabilities,
  IResDisabilities,
  IDisabilities,
} from "src/models/general/disabilities.interface";
import {
  MockResErrorDisabilities,
  MockResSuccessGetAllDisabilities,
  MockResSuccessGetDisabilities,
  MockResSuccessDisabilities,
} from "src/test/general/disabilities.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de incapacidades
 */
export class DisabilitiesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sports;
  }
  getAll(): Observable<IResDisabilities> {
    // return this._http.get<IResDisabilities>(this._baseUrl);
    const mock = of(MockResSuccessGetAllDisabilities);
    // const mock = of(MockResErrorDisabilities);
    return mock;
  }
  get(idData: number): Observable<IResDisabilities> {
    // return this._http.get<IResDisabilities>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetDisabilities);
    // const mock = of(MockResErrorDisabilities);
    return mock;
  }
  create(data: IDisabilities): Observable<IResDisabilities> {
    // const req: IReqDisabilities = { request: data, date: new Date() };
    // return this._http.post<IResDisabilities>(this._baseUrl, req);
    const mock = of(MockResSuccessDisabilities);
    // const mock = of(MockResErrorDisabilities);
    return mock;
  }
  update(idData: number, data: IDisabilities): Observable<IResDisabilities> {
    // const req: IReqDisabilities = { request: data, date: new Date() };
    // return this._http.put<IResDisabilities>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessDisabilities);
    // const mock = of(MockResErrorDisabilities);
    return mock;
  }
  delete(idData: number): Observable<IResDisabilities> {
    // return this._http.delete<IResDisabilities>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessDisabilities);
    // const mock = of(MockResErrorDisabilities);
    return mock;
  }
}
