import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { IResFood } from "src/models/home/food-plans.interface";
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
  getFoodList() {
    // const url = "https://miso-back-food-6equtupdiq-uc.a.run.app/food";
    const url = `${environment.api.base}/food`;
    return this._http.get<any>(url, { headers: this._httpHeaders }).pipe(
      retry(3),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
  getFoodsByUser(idUser: number): Observable<IResFood> {
    // const url = `https://cem2a935b5.execute-api.us-east-1.amazonaws.com/api/v1/users/${idUser}/food`;
    // CORS
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/food`;
    // const url = `${environment.api.base}/users/${idUser}/food`;
    return this._http.get<IResFood>(url).pipe(
      // retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
  putFoodsByUser(idUser: number, foods: number[]) {
    // const url = `https://cem2a935b5.execute-api.us-east-1.amazonaws.com/api/v1/users/${idUser}/food`;
    // CORS
    // const url = `${environment.api.base}/users/${idUser}/impediment`;
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${idUser}/food`;
    return this._http.put<any>(url, foods).pipe(
      // retry(2),
      catchError((err: any) => {
        return throwError(err);
      })
    );
  }
}
