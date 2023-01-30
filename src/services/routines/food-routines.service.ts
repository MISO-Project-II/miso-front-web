import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqFoodRoutines,
  IResFoodRoutines,
  IFoodRoutines,
} from "src/models/routines/food-routines.interface";
import {
  MockResErrorFoodRoutines,
  MockResSuccessGetAllFoodRoutines,
  MockResSuccessGetFoodRoutines,
  MockResSuccessFoodRoutines,
} from "src/test/routines/food-routines.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de rutinas
 */
export class FoodRoutinesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.food_routines;
    // this._baseUrl =  "http://localhost:3000/FoodRoutines";
  }
  getAll(idUser: number): Observable<IResFoodRoutines> {
    // return this._http.get<IResFoodRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetAllFoodRoutines);
    // const mock = of(MockResErrorFoodRoutines);
    return mock;
  }
  get(idUser: number): Observable<IResFoodRoutines> {
    // return this._http.get<IResFoodRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetFoodRoutines);
    // const mock = of(MockResErrorFoodRoutines);
    return mock;
  }
  create(data: IFoodRoutines): Observable<IResFoodRoutines> {
    // const req: IReqFoodRoutines = { request: data, date: new Date() };
    // return this._http.post<IResFoodRoutines>(this._baseUrl, req);
    const mock = of(MockResSuccessFoodRoutines);
    // const mock = of(MockResErrorFoodRoutines);
    return mock;
  }
  update(idUser: number, data: IFoodRoutines): Observable<IResFoodRoutines> {
    // const req: IReqFoodRoutines = { request: data, date: new Date() };
    // return this._http.put<IResFoodRoutines>(`${this._baseUrl}/${idUser}`, req);
    const mock = of(MockResSuccessFoodRoutines);
    // const mock = of(MockResErrorFoodRoutines);
    return mock;
  }
  delete(idUser: number): Observable<IResFoodRoutines> {
    // return this._http.delete<IResFoodRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessFoodRoutines);
    // const mock = of(MockResErrorFoodRoutines);
    return mock;
  }
}
