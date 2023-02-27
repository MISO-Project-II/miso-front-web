import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqPlan,
  IResPlan,
  IPlan,
} from "src/models/update-plan/update-plan.interface";
import {
  MockResErrorPlan,
  MockResSuccessGetPlan,
  MockResSuccessPlan,
} from "src/test/update-plan/update-plan.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Plan de usuario
 */
export class UpdatePlanService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.update_plan;
    // this._baseUrl =  "http://localhost:3000/Plan";
  }
  // getAll(): Observable<IResPlan> {
  //   // return this._http.get<IResPlan>(this._baseUrl);
  //   const mock = of(MockResSuccessGetAllPlan);
  //   // const mock = of(MockResErrorPlan);
  //   return mock;
  // }
  get(idUser: number): Observable<IResPlan> {
    // return this._http.get<IResPlan>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessGetPlan);
    // const mock = of(MockResErrorPlan);
    return mock;
  }
  create(data: IPlan): Observable<IResPlan> {
    // const req: IReqPlan = { request: data, date: new Date() };
    // return this._http.post<IResPlan>(this._baseUrl, req);
    const mock = of(MockResSuccessPlan);
    // const mock = of(MockResErrorPlan);
    return mock;
  }
  update(idUser: number, data: IPlan): Observable<IResPlan> {
    // const req: IReqPlan = { request: data, date: new Date() };
    // return this._http.put<IResPlan>(`${this._baseUrl}/${idUser}`, req);
    const mock = of(MockResSuccessPlan);
    // const mock = of(MockResErrorPlan);
    return mock;
  }
  delete(idUser: number): Observable<IResPlan> {
    // return this._http.delete<IResPlan>(`${this._baseUrl}/${idUser}`);
    const mock = of(MockResSuccessPlan);
    // const mock = of(MockResErrorPlan);
    return mock;
  }
}
