import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResLogin, ILogin } from "src/models/login/login.interface";
import { MockResSuccessLogin } from "src/test/login/login.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Login de usuario y tercero
 */
export class LoginService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.login;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }

  login(data: ILogin): Observable<IResLogin> {
    return this._http.post<IResLogin>(this._baseUrl, data, {
      headers: this._httpHeaders,
    });
    // const mock = of(MockResSuccessLogin);
    // const mock = of(MockResErrorLogin);
    // return mock;
  }
}
