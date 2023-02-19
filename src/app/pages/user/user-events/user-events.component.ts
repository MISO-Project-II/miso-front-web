import { IResProducts } from "src/models/home/products.interface";
import { ProductsService } from "./../../../../services/home/products/products.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";
import { RoutesService } from "src/services/general/routes.service";
import { IResRoutes } from "src/models/general/routes.interface";

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
    private _productsService: ProductsService,
    private _routesService: RoutesService
  ) {}

  ngOnInit() {
    console.log("XXX - UserEventsComponent");
    this._loadEvents();
    this._loadProducts();
    this._loadRoutes();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  get getProductsService$(): Observable<IResProducts> {
    return this._productsService.getProducts();
  }
  get getRoutesService$(): Observable<IResRoutes> {
    return this._routesService.getRoutes();
  }
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (res.success) {
          this._statusService.setEventsList(res.result!);
          console.log("XXX - UserDashboardComponent - _loadEvents - res", res);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadProducts(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResProducts) => {
        if (res.success) {
          this._statusService.setProductsList(res.result!);
          console.log("XXX - UserDashboardComponent - _loadProduct - res", res);
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
      (res: IResRoutes) => {
        if (res.success) {
          this._statusService.setRoutesList(res.result!);
          console.log("XXX - UserDashboardComponent - _loadProduct - res", res);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
