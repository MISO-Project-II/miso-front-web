import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
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
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.general_data;
  }

  get(userId: number): Observable<IResUserData> {
    // return this._http.get<IResUserData>(`${this._baseUrl}/${userId}`);
    const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorUserData);
    return mock;
  }
  update(userId: number, data: IUserData): Observable<IResUserData> {
    // const req: IReqGeneralData = { request: data, date: new Date() };
    return this._http.put<IResUserData>(`${this._baseUrl}/${userId}`, data);
    // const mock = of(MockResSuccessUserData);
    // const mock = of(MockResErrorGeneralData);
    // return mock;
  }
}
