import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqAllergies,
  IResAllergies,
  IAllergies,
} from "src/models/general/allergies.interface";
import {
  MockResErrorAllergies,
  MockResSuccessGetAllAllergies,
  MockResSuccessGetAllergies,
  MockResSuccessAllergies,
} from "src/test/general/allergies.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de alergias
 */
export class AllergiesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.sports;
  }
  getAll(): Observable<IResAllergies> {
    // return this._http.get<IResAllergies>(this._baseUrl);
    const mock = of(MockResSuccessGetAllAllergies);
    // const mock = of(MockResErrorAllergies);
    return mock;
  }
  get(idData: number): Observable<IResAllergies> {
    // return this._http.get<IResAllergies>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetAllergies);
    // const mock = of(MockResErrorAllergies);
    return mock;
  }
  create(data: IAllergies): Observable<IResAllergies> {
    // const req: IReqAllergies = { request: data, date: new Date() };
    // return this._http.post<IResAllergies>(this._baseUrl, req);
    const mock = of(MockResSuccessAllergies);
    // const mock = of(MockResErrorAllergies);
    return mock;
  }
  update(idData: number, data: IAllergies): Observable<IResAllergies> {
    // const req: IReqAllergies = { request: data, date: new Date() };
    // return this._http.put<IResAllergies>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessAllergies);
    // const mock = of(MockResErrorAllergies);
    return mock;
  }
  delete(idData: number): Observable<IResAllergies> {
    // return this._http.delete<IResAllergies>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessAllergies);
    // const mock = of(MockResErrorAllergies);
    return mock;
  }
}
