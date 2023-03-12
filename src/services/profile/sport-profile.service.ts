import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IResDisabilities } from "src/models/general/disabilities.interface";
import {
  IReqUserSportProfile,
  IResUserSportProfile,
  IUserSportProfile,
} from "src/models/profile/sport-profile.interface";
import {
  MockResErrorSportProfile,
  MockResSuccessGetAllSportProfile,
  MockResSuccessGetSportProfile,
  MockResSuccessSportProfile,
} from "src/test/profile/sport-profile.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Perfil deportivo del usurio
 */
export class SportProfileService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sport_profile;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }

  getImpediments() {
    // const url = "https://miso-back-impediments-6equtupdiq-uc.a.run.app/impediments";
    const url = `${environment.api.base}/impediments`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  putSportsByUser(idUser: number, sports: number[]) {
    const url = `${environment.api.base}/users/${idUser}/sport`;
    return this._http
      .put<any>(url, sports, { headers: this._httpHeaders })
      .pipe(
        // retry(2),
        catchError((err: any) => {
          return throwError(err);
        })
      );
  }

  getSportsByUser(idUser: number) {
    const url = `${environment.api.base}/users/${idUser}/sport`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      // retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  postImpedimentsByUser(idUser: number, impediments: number[]) {
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/impediment`;
    // const url = `${environment.api.base}/users/${idUser}/impediment`;
    return this._http.post<any>(url, impediments).pipe(
      // retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }

  getImpedimentsByUser(idUser: number) {
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/impediment/created`;
    // const url = `${environment.api.base}/users/${idUser}/impediment/created`;
    return this._http.get<any>(url).pipe(
      // retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
