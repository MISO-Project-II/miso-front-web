import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { IResRoutes, IRoutes } from "src/models/general/routes.interface";
import { MockResSuccessGetRoutes } from "src/test/general/routes.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de rutas
 */
export class RoutesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.routes;
  }
  getRoutes(): Observable<IResRoutes> {
    // return this._http.get<IResRoutes>(this._baseUrl);
    const mock = of(MockResSuccessGetRoutes);
    // const mock = of(MockResErrorRoutes);
    return mock;
  }
}
