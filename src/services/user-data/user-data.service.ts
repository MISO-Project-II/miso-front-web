import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IResThirdData } from "src/models/third-data/third-data.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import {
  MockResErrorUserData,
  MockResSuccessUserData,
} from "src/test/user-data/user-data.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de usuario
 */
export class UserDataService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.general_data;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }

  getGeneralData(userId: number): Observable<IResUserData> {
    return this._http
      .get<IResUserData>(`${this._baseUrl}/${userId}`, {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorUserData);
    // return mock;
  }
  updateGeneralData(userId: number, data: IUserData): Observable<IResUserData> {
    return this._http.put<IResUserData>(`${this._baseUrl}/${userId}`, data, {
      headers: this._httpHeaders,
    });
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    // return mock;
  }
  updatePlan(idUser: number): Observable<IResUserData> {
    this._baseUrl =
      "https://cem2a935b5.execute-api.us-east-1.amazonaws.com/api/v1/general_data/update-plan";
    // this._baseUrl =
    //   "https://miso-user-6equtupdiq-uc.a.run.app/general_data/update-plan";
    return this._http
      .get<IResUserData>(this._baseUrl + "/" + idUser, {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(5),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    // return mock;
  }
  getGeneralDataThird(): Observable<IResThirdData> {
    return this._http
      .get<IResThirdData>(`${this._baseUrl}` + "/thirds", {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorUserData);
    // return mock;
  }
}
