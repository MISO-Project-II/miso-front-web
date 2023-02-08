import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
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
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.food_profile;
    // this._baseUrl =  "http://localhost:3000/FoodProfile";
  }
  /**
   * Perfil deportivo del usurio
   */
  getAll(): Observable<IResUserFoodProfile> {
    // return this._http.get<IResUserFoodProfile>(this._baseUrl);
    const mock = of(MockResSuccessGetAllFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    return mock;
  }
  get(userId: number): Observable<IResUserFoodProfile> {
    // return this._http.get<IResUserFoodProfile>(`${this._baseUrl}/${userId}`);
    const mock = of(MockResSuccessGetFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    return mock;
  }
  create(data: IUserFoodProfile): Observable<IResUserFoodProfile> {
    // const req: IReqUserFoodProfile = { request: data, date: new Date() };
    // return this._http.post<IResUserFoodProfile>(this._baseUrl, req);
    const mock = of(MockResSuccessFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    return mock;
  }
  update(
    userId: number,
    data: IUserFoodProfile
  ): Observable<IResUserFoodProfile> {
    // const req: IReqUserFoodProfile = { request: data, date: new Date() };
    // return this._http.put<IResUserFoodProfile>(`${this._baseUrl}/${userId}`, req);
    const mock = of(MockResSuccessFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    return mock;
  }
  delete(userId: number): Observable<IResUserFoodProfile> {
    // return this._http.delete<IResUserFoodProfile>(`${this._baseUrl}/${userId}`);
    const mock = of(MockResSuccessFoodProfile);
    // const mock = of(MockResErrorFoodProfile);
    return mock;
  }
}
