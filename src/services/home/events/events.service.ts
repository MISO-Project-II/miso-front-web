import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, of, retry, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import {
  IResEvents,
  IEvents,
  IResEvent,
  IResUserEvents,
} from "src/models/home/events.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import {
  MockGetEvents,
  MockGetUserEventsConsume,
  MockResErrorEvents,
  MockResSuccessGetEvents,
} from "src/test/home/events.mock";

@Injectable({
  providedIn: "root",
})
/**
 * Datos de eventos
 */
export class EventsService {
  private _baseUrl: string = "";
  private _httpHeaders: HttpHeaders;
  constructor(private _http: HttpClient) {
    this._httpHeaders = new HttpHeaders(environment.api.headers);
  }
  /**Obtener todos los datos */
  getEvents(): Observable<IResEvents> {
    this._baseUrl = environment.api.base + environment.api.events;
    return this._http
      .get<IResEvents>(this._baseUrl, { headers: this._httpHeaders })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetEvents);
    // const mock = of(MockResErrorEvents);
    // return mock;
  }
  getEvent(idEvent: number): Observable<IResEvent> {
    this._baseUrl = environment.api.base + environment.api.events;
    return this._http
      .get<IResEvent>(this._baseUrl + "/" + idEvent, {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockResSuccessGetEvents);
    // const mock = of(MockResErrorEvents);
    // return mock;
  }
  getUserEventSportsman(idSportsman: number): Observable<IResUserEvents> {
    this._baseUrl =
      environment.api.base +
      environment.api.user_event +
      environment.api.user_event_consume;
    return this._http
      .get<IResUserEvents>(this._baseUrl.replace("{{id}}", idSportsman + ""), {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserEventsConsume);
    // const mock = of(MockResErrorEvents);
    // return mock;
  }
  getUserEventThird(idThird: number): Observable<IResUserEvents> {
    this._baseUrl =
      environment.api.base +
      environment.api.user_event +
      environment.api.user_event_created;
    return this._http
      .get<IResUserEvents>(this._baseUrl.replace("{{id}}", idThird + ""), {
        headers: this._httpHeaders,
      })
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserEventsConsume);
    // const mock = of(MockResErrorEvents);
    // return mock;
  }
  putUserEvent(
    idUser: number,
    listScheduled: number[]
  ): Observable<IGenericResponse> {
    this._baseUrl = environment.api.base + environment.api.user_event;
    return this._http
      .put<IGenericResponse>(
        this._baseUrl.replace("{{id}}", idUser + ""),
        listScheduled,
        { headers: this._httpHeaders }
      )
      .pipe(
        retry(3),
        catchError((err: any) => {
          return throwError(err);
        })
      );
    // const mock = of(MockGetUserEventsConsume);
    // const mock = of(MockResErrorEvents);
    // return mock;
  }

  postCreateEvent(data: IEvents): Observable<IResEvent> {
    this._baseUrl = environment.api.base + environment.api.events;
    return this._http.post<IResEvent>(this._baseUrl, data, {
      headers: this._httpHeaders,
    });
  }
  delEvent(idEvent: number): Observable<IResEvent> {
    this._baseUrl = environment.api.base + environment.api.events;
    return this._http.delete<IResEvent>(this._baseUrl + "/" + idEvent, {
      headers: this._httpHeaders,
    });
  }
}
