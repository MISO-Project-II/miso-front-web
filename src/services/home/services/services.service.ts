import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqServices,
  IResServices,
  IServices,
} from "src/models/home/services.interface";
import {
  MockResErrorServices,
  MockResSuccessGetServices,
} from "src/test/home/services.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de servicios
 */
export class ServicesService {
  private _baseUrl: string = "";
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  /**Obtener todos los datos */
  getServices(): Observable<IResServices> {
    this._baseUrl = environment.api.base + environment.api.services;
    return this._http
      .get<IResServices>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ServicesService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetServices);
    // const mock = of(MockResErrorServices);
    // return mock;
  }
  /**Obtener todos los datos relacionados con usuario */
  // getServicesByUser(idData: number): Observable<IResServices> {
  //   // return this._http.get<IResServices>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetServicesRegistered);
  //   // const mock = of(MockResErrorServices);
  //   return mock;
  // }
  /**Crear como tercero */
  // create(data: IServices): Observable<IResServices> {
  //   // const req: IReqServices = { request: data, date: new Date() };
  //   // return this._http.post<IResServices>(this._baseUrl, req);
  //   const mock = of(MockResSuccessGetServices);
  //   // const mock = of(MockResErrorServices);
  //   return mock;
  // }
  /**Actualizar como tercero */
  // updateEvent(data: IReqEvent): Observable<IResServices> {
  //   // const req: IReqServices = { request: data, date: new Date() };
  //   // return this._http.put<IResServices>(`${this._baseUrl}/${idData}`, req);
  //   const mock = of(MockResSuccessGetServices);
  //   // const mock = of(MockResErrorServices);
  //   return mock;
  // }
  /**Actualizar todos los datos relacionados con usuario */
  // updateServicesByUser(
  //   idData: number,
  //   data: IServices
  // ): Observable<IResServices> {
  //   // const req: IReqServices = { request: data, date: new Date() };
  //   // return this._http.put<IResServices>(`${this._baseUrl}/${idData}`, req);
  //   const mock = of(MockResSuccessGetServicesRegistered);
  //   // const mock = of(MockResErrorServices);
  //   return mock;
  // }
  /**Eliminar como tercero */
  // delete(idData: number): Observable<IResServices> {
  //   // return this._http.delete<IResServices>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetServices);
  //   // const mock = of(MockResErrorServices);
  //   return mock;
  // }
}
