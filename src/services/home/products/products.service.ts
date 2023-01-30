import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqProducts,
  IResProducts,
  IProducts,
} from "src/models/home/products.interface";
import {
  MockResErrorProducts,
  MockResSuccessGetAllProducts,
  MockResSuccessGetProducts,
  MockResSuccessProducts,
} from "src/test/home/products.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de productos
 */
export class ProductsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.products;
  }
  getAll(): Observable<IResProducts> {
    // return this._http.get<IResProducts>(this._baseUrl);
    const mock = of(MockResSuccessGetAllProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  get(idData: number): Observable<IResProducts> {
    // return this._http.get<IResProducts>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  create(data: IProducts): Observable<IResProducts> {
    // const req: IReqProducts = { request: data, date: new Date() };
    // return this._http.post<IResProducts>(this._baseUrl, req);
    const mock = of(MockResSuccessProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  update(idData: number, data: IProducts): Observable<IResProducts> {
    // const req: IReqProducts = { request: data, date: new Date() };
    // return this._http.put<IResProducts>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  delete(idData: number): Observable<IResProducts> {
    // return this._http.delete<IResProducts>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
}
