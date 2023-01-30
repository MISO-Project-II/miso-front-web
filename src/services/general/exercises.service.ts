import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqExercises,
  IResExercises,
  IExercises,
} from "src/models/general/exercises.interface";
import {
  MockResErrorExercises,
  MockResSuccessGetAllExercises,
  MockResSuccessGetExercises,
  MockResSuccessExercises,
} from "src/test/general/exercises.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de ejercicios
 */
export class ExercisesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.exercises;
  }
  getAll(): Observable<IResExercises> {
    // return this._http.get<IResExercises>(this._baseUrl);
    const mock = of(MockResSuccessGetAllExercises);
    // const mock = of(MockResErrorExercises);
    return mock;
  }
  get(idData: number): Observable<IResExercises> {
    // return this._http.get<IResExercises>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetExercises);
    // const mock = of(MockResErrorExercises);
    return mock;
  }
  create(data: IExercises): Observable<IResExercises> {
    // const req: IReqExercises = { request: data, date: new Date() };
    // return this._http.post<IResExercises>(this._baseUrl, req);
    const mock = of(MockResSuccessExercises);
    // const mock = of(MockResErrorExercises);
    return mock;
  }
  update(idData: number, data: IExercises): Observable<IResExercises> {
    // const req: IReqExercises = { request: data, date: new Date() };
    // return this._http.put<IResExercises>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessExercises);
    // const mock = of(MockResErrorExercises);
    return mock;
  }
  delete(idData: number): Observable<IResExercises> {
    // return this._http.delete<IResExercises>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessExercises);
    // const mock = of(MockResErrorExercises);
    return mock;
  }
}
