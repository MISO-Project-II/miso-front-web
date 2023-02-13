import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResProducts,
  IProducts,
  IReqProduct,
} from "src/models/home/products.interface";
import {
  MockGetProducts,
  MockResErrorProducts,
  MockResSuccessGetProducts,
  MockResSuccessGetProductsRegistered,
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
  /**Obtener todos los datos */
  getProducts(): Observable<IResProducts> {
    // return this._http.get<IResProducts>(this._baseUrl);
    const mock = of(MockResSuccessGetProducts);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  /**Obtener todos los datos relacionados con usuario */
  getProductsByUser(idData: number): Observable<IResProducts> {
    // return this._http.get<IResProducts>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetProductsRegistered);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  /**Crear como tercero */
  // create(data: IProducts): Observable<IResProducts> {
  //   // const req: IReqProducts = { request: data, date: new Date() };
  //   // return this._http.post<IResProducts>(this._baseUrl, req);
  //   const mock = of(MockResSuccessGetProducts);
  //   // const mock = of(MockResErrorProducts);
  //   return mock;
  // }
  /**Actualizar como tercero */
  // updateProduct(data: IReqProduct): Observable<IResProducts> {
  //   // const req: IReqProducts = { request: data, date: new Date() };
  //   // return this._http.put<IResProducts>(`${this._baseUrl}/${idData}`, req);
  //   const mock = of(MockResSuccessGetProducts);
  //   // const mock = of(MockResErrorProducts);
  //   return mock;
  // }
  /**Actualizar todos los datos relacionados con usuario */
  updateProductsByUser(
    idData: number,
    data: IProducts
  ): Observable<IResProducts> {
    // const req: IReqProducts = { request: data, date: new Date() };
    // return this._http.put<IResProducts>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessGetProductsRegistered);
    // const mock = of(MockResErrorProducts);
    return mock;
  }
  /**Eliminar como tercero */
  // delete(idData: number): Observable<IResProducts> {
  //   // return this._http.delete<IResProducts>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetProducts);
  //   // const mock = of(MockResErrorProducts);
  //   return mock;
  // }
}
