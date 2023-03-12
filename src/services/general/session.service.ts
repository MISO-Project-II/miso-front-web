import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResSetSession,
  ISetSession,
} from "src/models/general/session.interface";
import { MockGetSession } from "src/test/general/session.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de deportes
 */
export class SessionService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.session;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  /**Obtener todos los datos relacionados con usuario */
  getSession(): Observable<ISetSession> {
    // return this._http
    //   .get<ISetSession>(this._baseUrl, { headers: this._httpHeaders })
    //   .pipe(
    //     retry(3),
    //     catchError((err: any) => {
    //       return throwError(err);
    //     })
    //   );
    const mock = of(MockGetSession);
    return mock;
  }
  postSession(data: ISetSession): Observable<ISetSession> {
    this._baseUrl = environment.api.base + environment.api.session;
    return this._http.post<ISetSession>(this._baseUrl, data, {
      headers: this._httpHeaders,
    });
  }
}
