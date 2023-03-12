import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqUserFoodProfile,
  IResUserFoodProfile,
  IUserFoodProfile,
} from "src/models/profile/food-profile.interface";
import {
  MockResErrorFoodProfile,
  MockResSuccessGetAllFoodProfile,
  MockResSuccessGetFoodProfile,
  MockResSuccessFoodProfile,
} from "src/test/profile/food-profile.mock";

@Injectable({
  providedIn: "root",
})
export class FoodProfileService {
  private _baseUrl: string;
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.food_profile;
    this._httpHeaders = new HttpHeaders(environment.api.headers);
    // this._baseUrl =  "http://localhost:3000/FoodProfile";
  }
  /**
   * Perfil deportivo del usurio
   */
  // getAll(): Observable<IResUserFoodProfile> {
  //   // return this._http.get<IResUserFoodProfile>(this._baseUrl);
  //   const mock = of(MockResSuccessGetAllFoodProfile);
  //   // const mock = of(MockResErrorFoodProfile);
  //   return mock;
  // }
  get(userId: number): Observable<IResUserFoodProfile> {
    return this._http.get<IResUserFoodProfile>(`${this._baseUrl}/${userId}`);
    // const mock = of(MockResSuccessGetFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    // return mock;
  }
  // create(data: IUserFoodProfile): Observable<IResUserFoodProfile> {
  //   // const req: IReqUserFoodProfile = { request: data, date: new Date() };
  //   // return this._http.post<IResUserFoodProfile>(this._baseUrl, req);
  //   const mock = of(MockResSuccessFoodProfile);
  //   // const mock = of(MockResErrorFoodProfile);
  //   return mock;
  // }
  update(
    userId: number,
    data: IUserFoodProfile
  ): Observable<IResUserFoodProfile> {
    const req: IReqUserFoodProfile = { request: data, date: new Date() };
    return this._http.put<IResUserFoodProfile>(
      `${this._baseUrl}/${userId}`,
      req
    );
    // const mock = of(MockResSuccessFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    // return mock;
  }
  // delete(userId: number): Observable<IResUserFoodProfile> {
  //   // return this._http.delete<IResUserFoodProfile>(`${this._baseUrl}/${userId}`);
  //   const mock = of(MockResSuccessFoodProfile);
  //   // const mock = of(MockResErrorFoodProfile);
  //   return mock;
  // }
  getFoodList() {
    // const url = "https://miso-back-food-6equtupdiq-uc.a.run.app/food";
    const url = `${environment.api.base}/food`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      retry(3),
      catchError((err: any) => {
        console.log("XXX - GetImpediments - catchError - err", err);
        return throwError(err);
      })
    );
  }
}
