import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResService,
  IResServices,
  IResUserServices,
  IServices,
} from "src/models/home/services.interface";
import {
  MockGetUserServicesConsume,
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
  getService(idService: number): Observable<IResService> {
    this._baseUrl = environment.api.base + environment.api.services;
    return this._http
      .get<IResService>(this._baseUrl + "/" + idService, {
        headers: this._httpHeaders,
      })
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
  getUserServiceSportsman(idSportsman: number): Observable<IResUserServices> {
    this._baseUrl =
      environment.api.base +
      environment.api.user_service +
      environment.api.user_service_consume;
    console.log(
      "XXX - getUserServiceSportsman",
      this._baseUrl.replace("{{id}}", idSportsman + "")
    );
    // return this._http
    // .get<IResServices>(this._baseUrl, { headers: this._httpHeaders })
    // .pipe(
    //   retry(3),
    //   catchError((err: any) => {
    //     console.log('XXX - ServicesService - catchError - err', err);
    //     return throwError(err);
    //   })
    // );
    const mock = of(MockGetUserServicesConsume);
    // const mock = of(MockResErrorServices);
    return mock;
  }
  putUserService(
    idUser: number,
    listScheduled: number[]
  ): Observable<IResUserServices> {
    this._baseUrl = environment.api.base + environment.api.user_service;
    console.log(
      "XXX - putUserService",
      this._baseUrl.replace("{{id}}", idUser + "")
    );
    // return this._http
    // .put<IResServices>(this._baseUrl, listScheduled { headers: this._httpHeaders })
    // .pipe(
    //   retry(3),
    //   catchError((err: any) => {
    //     console.log('XXX - ServicesService - catchError - err', err);
    //     return throwError(err);
    //   })
    // );
    const mock = of(MockGetUserServicesConsume);
    // const mock = of(MockResErrorServices);
    return mock;
  }
}
