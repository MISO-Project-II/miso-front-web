import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
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
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sport_profile;
    // this._baseUrl =  "http://localhost:3000/SportProfile";
  }
  getAll(): Observable<IResUserSportProfile> {
    // return this._http.get<IResSportProfile>(this._baseUrl);
    const mock = of(MockResSuccessGetAllSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
  get(userId: number): Observable<IResUserSportProfile> {
    // return this._http.get<IResSportProfile>(`${this._baseUrl}/${id}`);
    const mock = of(MockResSuccessGetSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
  create(data: IUserSportProfile): Observable<IResUserSportProfile> {
    // const req: IReqSportProfile = { request: data, date: new Date() };
    // return this._http.post<IResSportProfile>(this._baseUrl, req);
    const mock = of(MockResSuccessSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
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
  delete(userId: number): Observable<IResUserSportProfile> {
    // return this._http.delete<IResSportProfile>(`${this._baseUrl}/${id}`);
    const mock = of(MockResSuccessSportProfile);
    // const mock = of(MockResErrorSportProfile);
    return mock;
  }
}
