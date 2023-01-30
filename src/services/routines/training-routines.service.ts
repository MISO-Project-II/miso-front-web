import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqTrainingRoutines,
  IResTrainingRoutines,
  ITrainingRoutines,
} from "src/models/routines/training-routines.interface";
import {
  MockResErrorTrainingRoutines,
  MockResSuccessGetAllTrainingRoutines,
  MockResSuccessGetTrainingRoutines,
  MockResSuccessTrainingRoutines,
} from "src/test/routines/training-routines.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de pnales de entrenamiento
 */
export class TrainingRoutinesService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.training_routines;
    // this._baseUrl =  "http://localhost:3000/TrainingRoutines";
  }
  getAll(idUser: number): Observable<IResTrainingRoutines> {
    // return this._http.get<IResTrainingRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetAllTrainingRoutines);
    // const mock = of(MockResErrorTrainingRoutines);
    return mock;
  }
  get(idUser: number): Observable<IResTrainingRoutines> {
    // return this._http.get<IResTrainingRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetTrainingRoutines);
    // const mock = of(MockResErrorTrainingRoutines);
    return mock;
  }
  create(data: ITrainingRoutines): Observable<IResTrainingRoutines> {
    // const req: IReqTrainingRoutines = { request: data, date: new Date() };
    // return this._http.post<IResTrainingRoutines>(this._baseUrl, req);
    const mock = of(MockResSuccessTrainingRoutines);
    // const mock = of(MockResErrorTrainingRoutines);
    return mock;
  }
  update(
    idUser: number,
    data: ITrainingRoutines
  ): Observable<IResTrainingRoutines> {
    // const req: IReqTrainingRoutines = { request: data, date: new Date() };
    // return this._http.put<IResTrainingRoutines>(`${this._baseUrl}/${idUser}`, req);
    const mock = of(MockResSuccessTrainingRoutines);
    // const mock = of(MockResErrorTrainingRoutines);
    return mock;
  }
  delete(idUser: number): Observable<IResTrainingRoutines> {
    // return this._http.delete<IResTrainingRoutines>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessTrainingRoutines);
    // const mock = of(MockResErrorTrainingRoutines);
    return mock;
  }
}
