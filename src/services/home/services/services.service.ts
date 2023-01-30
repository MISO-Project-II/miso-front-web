import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqServices,
  IResServices,
  IServices,
} from "src/models/home/services.interface";
import {
  MockResErrorServices,
  MockResSuccessGetAllServices,
  MockResSuccessGetServices,
  MockResSuccessServices,
} from "src/test/home/services.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de servicios
 */
export class ServicesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.services;
  }
  getAll(): Observable<IResServices> {
    // return this._http.get<IResServices>(this._baseUrl);
    const mock = of(MockResSuccessGetAllServices);
    // const mock = of(MockResErrorServices);
    return mock;
  }
  get(idData: number): Observable<IResServices> {
    // return this._http.get<IResServices>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetServices);
    // const mock = of(MockResErrorServices);
    return mock;
  }
  create(data: IServices): Observable<IResServices> {
    // const req: IReqServices = { request: data, date: new Date() };
    // return this._http.post<IResServices>(this._baseUrl, req);
    const mock = of(MockResSuccessServices);
    // const mock = of(MockResErrorServices);
    return mock;
  }
  update(idData: number, data: IServices): Observable<IResServices> {
    // const req: IReqServices = { request: data, date: new Date() };
    // return this._http.put<IResServices>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessServices);
    // const mock = of(MockResErrorServices);
    return mock;
  }
  delete(idData: number): Observable<IResServices> {
    // return this._http.delete<IResServices>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessServices);
    // const mock = of(MockResErrorServices);
    return mock;
  }
}
