import { ProductsService } from "../../../../services/home/products/products.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResUserProducts } from "src/models/home/products.interface";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";
import { RoutesService } from "src/services/general/routes.service";

@Component({
  selector: "app-third-products",
  templateUrl: "./third-products.component.html",
  styleUrls: ["./third-products.component.scss"],
})
export class ThirdProductsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _productsService: ProductsService,
    private _routesService: RoutesService
  ) {}

  ngOnInit() {
    this._loadProductsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getProductsService$(): Observable<IResUserProducts> {
    return this._productsService.getUserProductThird(
      this._statusService.getGeneralStatus().userId
    );
  }
  private _loadProductsScheduled(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserProducts) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log("🚀 XXX - _loadProductsScheduled - res : ", res);
          this._statusService.setProductsListScheduled(
            res.result["produce-product"]!
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
