import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IResPlan, IPlan } from "src/models/update-plan/update-plan.interface";
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
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    // this._baseUrl = "https://miso-back-upgrade-6equtupdiq-uc.a.run.app/payment/user/{{iUser}}/purchase-plan";
    this._baseUrl =
      environment.api.base + "/payment/{{iUser}}/purchase-plan/plan-name";
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  updateContract(idUser: number, data: IPlan): Observable<IResPlan> {
    return this._http
      .get<IResPlan>(
        this._baseUrl.replace("{{iUser}}", idUser + "") + "/" + data.idPlan,
        { headers: this._httpHeaders }
      )
      .pipe(
        retry(3),
        catchError((err: any) => {
          console.log("🚀 XXX - UpdatePlanService - catchError - err : ", err);
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessPlan);
    // const mock = of(MockResErrorPlan);
    // return mock;
  }
}
