import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqPains,
  IResPains,
  IPains,
} from "src/models/general/pains.interface";
import {
  MockResErrorPains,
  MockResSuccessGetAllPains,
  MockResSuccessGetPains,
  MockResSuccessPains,
} from "src/test/general/pains.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de molestias
 */
export class PainsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.pains;
  }
  getAll(): Observable<IResPains> {
    // return this._http.get<IResPains>(this._baseUrl);
    const mock = of(MockResSuccessGetAllPains);
    // const mock = of(MockResErrorPains);
    return mock;
  }
  get(idData: number): Observable<IResPains> {
    // return this._http.get<IResPains>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetPains);
    // const mock = of(MockResErrorPains);
    return mock;
  }
  create(data: IPains): Observable<IResPains> {
    // const req: IReqPains = { request: data, date: new Date() };
    // return this._http.post<IResPains>(this._baseUrl, req);
    const mock = of(MockResSuccessPains);
    // const mock = of(MockResErrorPains);
    return mock;
  }
  update(idData: number, data: IPains): Observable<IResPains> {
    // const req: IReqPains = { request: data, date: new Date() };
    // return this._http.put<IResPains>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessPains);
    // const mock = of(MockResErrorPains);
    return mock;
  }
  delete(idData: number): Observable<IResPains> {
    // return this._http.delete<IResPains>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessPains);
    // const mock = of(MockResErrorPains);
    return mock;
  }
}
