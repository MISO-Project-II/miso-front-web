import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqUserData,
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import {
  MockResErrorUserData,
  MockResSuccessGetUserData,
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
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.user_data;
  }
  // getAll(): Observable<IResUserData> {
  //   // return this._http.get<IResUserData>(this._baseUrl);
  //   const mock = of(MockResSuccessGetAllUserData);
  //   // const mock = of(MockResErrorUserData);
  //   return mock;
  // }
  get(userId: number): Observable<IResUserData> {
    // return this._http.get<IResUserData>(`${this._baseUrl}/${userId}`);
    const mock = of(MockResSuccessGetUserData);
    // const mock = of(MockResErrorUserData);
    return mock;
  }
  create(data: IUserData): Observable<IResUserData> {
    // const req: IReqUserData = { request: data, date: new Date() };
    // return this._http.post<IResUserData>(this._baseUrl, req);
    const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorUserData);
    return mock;
  }
  update(userId: number, data: IUserData): Observable<IResUserData> {
    // const req: IReqGeneralData = { request: data, date: new Date() };
    // return this._http.put<IResUserData>(`${this._baseUrl}/${userId}`, req);
    const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    return mock;
  }
  // delete(id: number): Observable<IResUserData> {
  //   // return this._http.delete<IResUserData>(`${this._baseUrl}/${id}`);
  //   const mock = of(MockResSuccessUserData);
  //   // const mock = of(MockResErrorUserData);
  //   return mock;
  // }
}
