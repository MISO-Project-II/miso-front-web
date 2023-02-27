import { IResProducts } from "src/models/home/products.interface";
import { ProductsService } from "../../../../services/home/products/products.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  IResServices,
  IResUserServices,
} from "src/models/home/services.interface";
import { StatusModel } from "src/models/local/status-model";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { RoutesService } from "src/services/general/routes.service";
import { IResRoutes } from "src/models/general/routes.interface";

@Component({
  selector: "app-third-services",
  templateUrl: "./third-services.component.html",
  styleUrls: ["./third-services.component.scss"],
})
export class ThirdServicesComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService,
    private _routesService: RoutesService
  ) {}

  ngOnInit() {
    console.log("XXX - ThirdServicesComponent (Contiene a serviceos y rutas)");
    this._loadServicesScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getServicesService$(): Observable<IResUserServices> {
    return this._servicesService.getUserServiceThird(
      this._statusService.getGeneralStatus().userId
    );
  }
  private _loadServicesScheduled(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserServices) => {
        if (res.success) {
          // if (!!res) {
          console.log(
            "XXX - ScheduledServicesComponent - _loadServicesScheduled - res",
            res
          );
          this._statusService.setServicesListScheduled(
            res.result["produce-services"]!
          );
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
}