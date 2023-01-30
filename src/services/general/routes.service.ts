import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqRoutes,
  IResRoutes,
  IRoutes,
} from "src/models/general/routes.interface";
import {
  MockResErrorRoutes,
  MockResSuccessGetAllRoutes,
  MockResSuccessGetRoutes,
  MockResSuccessRoutes,
} from "src/test/general/routes.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de rutas
 */
export class RoutesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.routes;
  }
  getAll(): Observable<IResRoutes> {
    // return this._http.get<IResRoutes>(this._baseUrl);
    const mock = of(MockResSuccessGetAllRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
  get(idData: number): Observable<IResRoutes> {
    // return this._http.get<IResRoutes>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
  create(data: IRoutes): Observable<IResRoutes> {
    // const req: IReqRoutes = { request: data, date: new Date() };
    // return this._http.post<IResRoutes>(this._baseUrl, req);
    const mock = of(MockResSuccessRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
  update(idData: number, data: IRoutes): Observable<IResRoutes> {
    // const req: IReqRoutes = { request: data, date: new Date() };
    // return this._http.put<IResRoutes>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
  delete(idData: number): Observable<IResRoutes> {
    // return this._http.delete<IResRoutes>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
}
