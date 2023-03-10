import { IResProducts } from "src/models/home/products.interface";
import { ProductsService } from "./../../../../services/home/products/products.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";
import { RoutesService } from "src/services/general/routes.service";
import { IRoutes } from "src/models/general/routes.interface";

@Component({
  selector: "app-user-events",
  templateUrl: "./user-events.component.html",
  styleUrls: ["./user-events.component.scss"],
})
export class UserEventsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService,
    private _routesService: RoutesService
  ) {}

  ngOnInit() {
    console.log("XXX - UserEventsComponent (Contiene a eventos y rutas)");
    this._loadEvents();
    this._loadRoutes();
    let idPrevEvent = history.state.data;
    if (idPrevEvent) {
      let btnTabSearchEvents = document.getElementById('search_events_tab');
      btnTabSearchEvents?.click();
      window.dispatchEvent(new CustomEvent('setEventById', { detail: idPrevEvent }));
    }
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  get getRoutesService$(): Observable<IRoutes[]> {
    return this._routesService.getRoutes();
  }
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (!!res && res.success) {
          console.log("XXX - UserEventsComponent - _loadEvents - res", res);
          this._statusService.setEventsList(res.result!);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  private _loadRoutes(): void {
    this.getRoutesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IRoutes[]) => {
        if (!!res) {
          console.log("XXX - UserEventsComponent - _loadRoutes - res", res);
          this._statusService.setRoutesList(res!);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
