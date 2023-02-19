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
          console.log("XXX - EventsService - catchError - err", err);
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
          console.log("XXX - EventsService - catchError - err", err);
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
    console.log(
      "XXX - getUserEventSportsman",
      this._baseUrl.replace("{{id}}", idSportsman + "")
    );
    // return this._http
    // .get<IResEvents>(this._baseUrl, { headers: this._httpHeaders })
    // .pipe(
    //   retry(3),
    //   catchError((err: any) => {
    //     console.log('XXX - EventsService - catchError - err', err);
    //     return throwError(err);
    //   })
    // );
    const mock = of(MockGetUserEventsConsume);
    // const mock = of(MockResErrorEvents);
    return mock;
  }
  putUserEvent(
    idUser: number,
    listScheduled: number[]
  ): Observable<IResUserEvents> {
    this._baseUrl = environment.api.base + environment.api.user_event;
    console.log(
      "XXX - putUserEvent",
      this._baseUrl.replace("{{id}}", idUser + "")
    );
    // return this._http
    // .put<IResEvents>(this._baseUrl, listScheduled { headers: this._httpHeaders })
    // .pipe(
    //   retry(3),
    //   catchError((err: any) => {
    //     console.log('XXX - EventsService - catchError - err', err);
    //     return throwError(err);
    //   })
    // );
    const mock = of(MockGetUserEventsConsume);
    // const mock = of(MockResErrorEvents);
    return mock;
  }

  // /**Obtener todos los datos relacionados con usuario */
  // getEventsByUser(idData: number): Observable<IResEvents> {
  //   // return this._http.get<IResEvents>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetEventsRegistered);
  //   // const mock = of(MockResErrorEvents);
  //   return mock;
  // }
  /**Crear como tercero */
  // create(data: IEvents): Observable<IResEvents> {
  //   // const req: IReqEvents = { request: data, date: new Date() };
  //   // return this._http.post<IResEvents>(this._baseUrl, req);
  //   const mock = of(MockResSuccessGetEvents);
  //   // const mock = of(MockResErrorEvents);
  //   return mock;
  // }
  /**Actualizar como tercero */
  // updateEvent(data: IReqEvent): Observable<IResEvents> {
  //   // const req: IReqEvents = { request: data, date: new Date() };
  //   // return this._http.put<IResEvents>(`${this._baseUrl}/${idData}`, req);
  //   const mock = of(MockResSuccessGetEvents);
  //   // const mock = of(MockResErrorEvents);
  //   return mock;
  // }
  /**Actualizar todos los datos relacionados con usuario */
  // updateEventsByUser(idData: number, data: IEvents): Observable<IResEvents> {
  //   // const req: IReqEvents = { request: data, date: new Date() };
  //   // return this._http.put<IResEvents>(`${this._baseUrl}/${idData}`, req);
  //   const mock = of(MockResSuccessGetEventsRegistered);
  //   // const mock = of(MockResErrorEvents);
  //   return mock;
  // }
  /**Eliminar como tercero */
  // delete(idData: number): Observable<IResEvents> {
  //   // return this._http.delete<IResEvents>(`${this._baseUrl}/${idData}`);
  //   const mock = of(MockResSuccessGetEvents);
  //   // const mock = of(MockResErrorEvents);
  //   return mock;
  // }
}
