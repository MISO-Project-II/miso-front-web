import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IRoutes } from "src/models/general/routes.interface";
import { MockGetRoutes } from "src/test/general/routes.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de rutas
 */
export class RoutesService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    // this._baseUrl = environment.api.base + environment.api.routes;
    // XXX CORS
    this._baseUrl = "https://miso-back-path-6equtupdiq-uc.a.run.app/paths";
    this._httpHeaders = new HttpHeaders(environment.api.headers2);
  }
  getRoutes(): Observable<IRoutes[]> {
    return this._http
      .get<IRoutes[]>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
  }
}
