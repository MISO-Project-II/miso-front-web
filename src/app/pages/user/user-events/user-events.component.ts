import { IResProducts } from "src/models/home/products.interface";
import { ProductsService } from "./../../../../services/home/products/products.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";

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
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    console.log("XXX - UserEventsComponent");
    this._loadEvents();
    this._loadProducts();
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
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (res.success) {
          this._statusService.setEventsList(res.result!);
          console.log("XXX - UserDashboardComponent - _loadEvents - res", res);
        }
      },
      (err) => {
        console.error(err);
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
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
