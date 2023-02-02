import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IReqLogin, IResLogin, ILogin } from "src/models/login/login.interface";
import {
  MockResErrorLogin,
  MockResSuccessLogin,
} from "src/test/login/login.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Login de usuario y tercero
 */
export class LoginService {
  private _baseUrl: string;
  private httpOptions: {};
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.login + "?apikey=pfHfQuIZc4I8a5Rzf8D7S7Irw6FGMOdyJ9v3fH0b9xAGg4Ed";
    // this._baseUrl =
    //   "https://miso-login-usuario-ufjo7wdt2a-uc.a.run.app" +
    //   environment.api.login;
  }

  login(data: ILogin): Observable<IResLogin> {
    // const req: IReqLogin = { request: data };
    return this._http.post<IResLogin>(this._baseUrl, data);
    // const mock = of(MockResSuccessLogin);
    // const mock = of(MockResErrorLogin);
    // return mock;
  }
}
