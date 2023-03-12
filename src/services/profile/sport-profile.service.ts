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
    // this._baseUrl =  "http://localhost:3000/SportProfile";
  }
  // getAll(): Observable<IResUserSportProfile> {
  //   // return this._http.get<IResSportProfile>(this._baseUrl);
  //   const mock = of(MockResSuccessGetAllSportProfile);
  //   // const mock = of(MockResErrorSportProfile);
  //   return mock;
  // }
  get(userId: number): Observable<IResUserSportProfile> {
    // return this._http.get<IResUserSportProfile>(`${this._baseUrl}/${userId}`);
    const mock = of(MockResSuccessGetSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
  // create(data: IUserSportProfile): Observable<IResUserSportProfile> {
  //   // const req: IReqSportProfile = { request: data, date: new Date() };
  //   // return this._http.post<IResSportProfile>(this._baseUrl, req);
  //   const mock = of(MockResSuccessSportProfile);
  //   // const mock = of(MockResErrorSportProfile);
  //   return mock;
  // }
  update(
    userId: number,
    data: IUserSportProfile
  ): Observable<IResUserSportProfile> {
    // const req: IReqSportProfile = { request: data, date: new Date() };
    // return this._http.put<IResSportProfile>(`${this._baseUrl}/${id}`, req);
    const mock = of(MockResSuccessSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
  // delete(userId: number): Observable<IResUserSportProfile> {
  //   // return this._http.delete<IResSportProfile>(`${this._baseUrl}/${id}`);
  //   const mock = of(MockResSuccessSportProfile);
  //   // const mock = of(MockResErrorSportProfile);
  //   return mock;
  // }
  getImpediments() {
    // const url = "https://miso-back-impediments-6equtupdiq-uc.a.run.app/impediments";
    const url = `${environment.api.base}/impediments`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      retry(2),
      catchError((err: any) => {
        console.log("XXX - GetImpediments - catchError - err", err);
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
          console.log("XXX - PutSportsByUser - catchError - err", err);
          return throwError(err);
        })
      );
  }

  getSportsByUser(idUser: number) {
    const url = `${environment.api.base}/users/${idUser}/sport`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      // retry(2),
      catchError((err: any) => {
        console.log("XXX - GetSportsByUser - catchError - err", err);
        return throwError(err);
      })
    );
  }

  postImpedimentsByUser(idUser: number, impediments: number[]) {
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/impediment`;
    // const url = `${environment.api.base}/users/${idUser}/impediment`;
    return this._http
      .post<any>(url, impediments)
      .pipe(
        // retry(2),
        catchError((err: any) => {
          console.log("XXX - PostImpediments - catchError - err", err);
          return throwError(err);
        })
      );
  }

  getImpedimentsByUser(idUser: number) {
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/impediment/created`;
    // const url = `${environment.api.base}/users/${idUser}/impediment/created`;
    return this._http
      .get<any>(url)
      .pipe(
        // retry(2),
        catchError((err: any) => {
          console.log("XXX - GetImpedimentsByUser - catchError - err", err);
          return throwError(err);
        })
      );
  }
}
