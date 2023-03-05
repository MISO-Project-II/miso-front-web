import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
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
          console.log("XXX - UserDataService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorUserData);
    // return mock;
  }
  updateGeneralData(userId: number, data: IUserData): Observable<IResUserData> {
    return this._http.put<IResUserData>(`${this._baseUrl}/${userId}`, data);
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    // return mock;
  }
  updatePlan(idUser: number): Observable<IResUserData> {
    this._baseUrl =
      "https://miso-user-6equtupdiq-uc.a.run.app/general_data/update-plan";
    return this._http.get<IResUserData>(this._baseUrl + "/" + idUser);
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    // return mock;
  }
}
