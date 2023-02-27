import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResProducts,
  IProducts,
  IResProduct,
  IResUserProducts,
} from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import {
  MockGetUserProductsConsume,
  MockResSuccessGetProducts,
} from "src/test/home/products.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de productos
 */
export class ProductsService {
  private _baseUrl: string = "";
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  /**Obtener todos los datos */
  getProducts(): Observable<IResProducts> {
    this._baseUrl = environment.api.base + environment.api.products;
    return this._http
      .get<IResProducts>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ProductsService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetProducts);
    // const mock = of(MockResErrorProducts);
    // return mock;
  }
  getProduct(idProduct: number): Observable<IResProduct> {
    this._baseUrl = environment.api.base + environment.api.products;
    return this._http
      .get<IResProduct>(this._baseUrl + "/" + idProduct, {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ProductsService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetProducts);
    // const mock = of(MockResErrorProducts);
    // return mock;
  }
  getUserProductSportsman(idSportsman: number): Observable<IResUserProducts> {
    this._baseUrl =
      environment.api.base +
      environment.api.user_product +
      environment.api.user_product_consume;
    console.log(
      "XXX - getUserProductSportsman",
      this._baseUrl.replace("{{id}}", idSportsman + "")
    );
    return this._http
      .get<IResUserProducts>(
        this._baseUrl.replace("{{id}}", idSportsman + ""),
        { headers: this._httpHeaders }
      )
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ProductsService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserProductsConsume);
    // const mock = of(MockResErrorProducts);
    // return mock;
  }
  getUserProductThird(idThird: number): Observable<IResUserProducts> {
    this._baseUrl =
      environment.api.base +
      environment.api.user_product +
      environment.api.user_product_created;
    console.log(
      "XXX - getUserProductSportsman",
      this._baseUrl.replace("{{id}}", idThird + "")
    );
    return this._http
      .get<IResUserProducts>(this._baseUrl.replace("{{id}}", idThird + ""), {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ProductsService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserProductsConsume);
    // const mock = of(MockResErrorProducts);
    // return mock;
  }
  putUserProduct(
    idUser: number,
    listScheduled: number[]
  ): Observable<IGenericResponse> {
    this._baseUrl = environment.api.base + environment.api.user_product;
    console.log(
      "XXX - putUserProduct",
      this._baseUrl.replace("{{id}}", idUser + "")
    );
    return this._http
      .put<IGenericResponse>(
        this._baseUrl.replace("{{id}}", idUser + ""),
        listScheduled,
        { headers: this._httpHeaders }
      )
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("XXX - ProductsService - catchError - err", err);
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserProductsConsume);
    // const mock = of(MockResErrorProducts);
    // return mock;
  }
  postCreateProduct(data: IProducts): Observable<IResProduct> {
    this._baseUrl = environment.api.base + environment.api.products;
    return this._http.post<IResProduct>(this._baseUrl, data, {
      headers: this._httpHeaders,
    });
  }
  delProduct(idProduct: number): Observable<IResProduct> {
    this._baseUrl = environment.api.base + environment.api.products;
    return this._http.delete<IResProduct>(this._baseUrl + "/" + idProduct, {
      headers: this._httpHeaders,
    });
  }
}
