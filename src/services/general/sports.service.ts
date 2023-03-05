import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IResDisabilities } from "src/models/general/disabilities.interface";
import { IResPains } from "src/models/general/pains.interface";
import { IResSports, ISports } from "src/models/general/sports.interface";
import {
  MockResErrorSports,
  MockResSuccessGetSports,
} from "src/test/general/sports.mock";
@Injectable({
  providedIn: "root",
})
/**
 * Datos de deportes
 */
export class SportsService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sports;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  /**Obtener todos los datos relacionados con usuario */
  getSports(): Observable<IResSports> {
    return this._http
      .get<IResSports>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - UserDataService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetSports);
    // const mock = of(MockResErrorSports);
    // return mock;
  }
  getDisabilities(): Observable<IResDisabilities> {
    const url = `${this._baseUrl}${environment.api.disabilities}`;
    return this._http
      .get<IResDisabilities>(url, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - UserDataService - catchError - err", err);
          return throwError(err);
        })
      );
  }
  getPains(): Observable<IResPains> {
    const url = `${this._baseUrl}${environment.api.pains}`;
    return this._http.get<IResPains>(url, { headers: this._httpHeaders }).pipe(
      retry(3),
      catchError((err: any) => {
        console.log("XXX - UserDataService - catchError - err", err);
        return throwError(err);
      })
    );
  }
  /**Obtener todos los datos relacionados con usuario */
  getSportsByUser(idData: number): Observable<IResSports> {
    // return this._http.get<IResSports>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetSports);
    // const mock = of(MockResErrorSports);
    return mock;
  }
}
