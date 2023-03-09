import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResProducts } from "src/models/home/products.interface";
import { IResServices } from "src/models/home/services.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-services",
  templateUrl: "./user-services.component.html",
  styleUrls: ["./user-services.component.scss"],
})
export class UserServicesComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    console.log(
      "XXX - UserServicesComponent (Contiene a servicios y productos)"
    );
    this._loadServices();
    this._loadProducts();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getServicesService$(): Observable<IResServices> {
    return this._servicesService.getServices();
  }
  get getProductsService$(): Observable<IResProducts> {
    return this._productsService.getProducts();
  }
  private _loadServices(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserServicesComponent - _loadServices - res : ",
            res
          );
          this._statusService.setServicesList(res.result!);
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
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserServicesComponent - _loadProducts - res : ",
            res
          );
          this._statusService.setProductsList(res.result!);
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
