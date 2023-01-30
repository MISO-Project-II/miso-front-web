import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IReqEvents,
  IResEvents,
  IEvents,
} from "src/models/home/events.interface";
import {
  MockResErrorEvents,
  MockResSuccessGetAllEvents,
  MockResSuccessGetEvents,
  MockResSuccessEvents,
} from "src/test/home/events.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de eventos
 */
export class EventsService {
  private _baseUrl: string;
  constructor(private _http: HttpClient) {
    this._baseUrl = environment.api.base + environment.api.events;
  }
  getAll(): Observable<IResEvents> {
    // return this._http.get<IResEvents>(this._baseUrl);
    const mock = of(MockResSuccessGetAllEvents);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
  get(idData: number): Observable<IResEvents> {
    // return this._http.get<IResEvents>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessGetEvents);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
  create(data: IEvents): Observable<IResEvents> {
    // const req: IReqEvents = { request: data, date: new Date() };
    // return this._http.post<IResEvents>(this._baseUrl, req);
    const mock = of(MockResSuccessEvents);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
  update(idData: number, data: IEvents): Observable<IResEvents> {
    // const req: IReqEvents = { request: data, date: new Date() };
    // return this._http.put<IResEvents>(`${this._baseUrl}/${idData}`, req);
    const mock = of(MockResSuccessEvents);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
  delete(idData: number): Observable<IResEvents> {
    // return this._http.delete<IResEvents>(`${this._baseUrl}/${idData}`);
    const mock = of(MockResSuccessEvents);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
}
