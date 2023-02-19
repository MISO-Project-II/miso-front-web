import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResUserRegister,
  IUserRegister,
} from "src/models/register/user-register.interface";
// import {
//   MockResErrorUserRegister,
//   MockResSuccessUserRegister,
// } from "src/test/register/user-register.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Registro de datos de usuario
 */
export class UserRegisterService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.user_register;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  create(data: IUserRegister): Observable<IResUserRegister> {
    // const req: IReqUserRegister = { request: data, date: new Date() };
    return this._http.post<IResUserRegister>(this._baseUrl, data, {
      headers: this._httpHeaders,
    });
    // const mock = of(MockResSuccessUserRegister);
    // const mock = of(MockResErrorUserRegister);
    // return mock;
  }
  // update(userId: number, data: IUserRegister): Observable<IResUserRegister> {
  //   // const req: IReqUserRegister = { request: data, date: new Date() };
  //   // return this._http.put<IResUserRegister>(`${this._baseUrl}/${userId}`, req);
  //   const mock = of(MockResSuccessUserRegister);
  //   // const mock = of(MockResErrorUserRegister);
  //   return mock;
  // }
}
