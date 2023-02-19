import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Observable, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { IProducts, IResProducts } from "src/models/home/products.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-actual-products",
  templateUrl: "./actual-products.component.html",
  styleUrls: ["./actual-products.component.scss"],
})
export class ActualProductsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _productSelected: IProducts = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  constructor(
    private _statusService: StatusService,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._loadGeneralStatus();
    this._loadProductsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  get getProduct$(): IProducts {
    return this._productSelected;
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
  }
  get getProductsService$(): Observable<IResProducts> {
    return this._productsService.getProductsByUser(this.generalStatus.userId);
  }
  get getProductsListScheduled$(): Observable<IProducts[]> {
    return this._statusService.getProductsListScheduled$();
  }
  private _loadProductsScheduled(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResProducts) => {
        if (res.success) {
          this._statusService.setProductsListScheduled(res.result!);
          console.log(
            "XXX - ScheduledProductsComponent - _loadProductsScheduled - res",
            res
          );
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  /**
   * Cancelar producto inscrito por el usuario
   */
  private _onSubmit(): void {
    this._statusService.spinnerShow();
    this.getProductsListScheduled$
      .pipe(takeUntil(this._destroy$))
      .subscribe((listScheduled: IProducts[]) => {
        const data: IProducts = listScheduled[0];
        this._callService(data);
      });
  }

  public delProduct(item: any): void {
    this.getProductsListScheduled$
      .pipe(takeUntil(this._destroy$))
      .subscribe((listScheduled: IProducts[]) => {
        const productsListScheduled = listScheduled.filter(
          (data) => data.id != item.id
        );
        this._statusService.setProductsListScheduled(productsListScheduled);
        this._productSelected = null!;
        this._onSubmit();
      });
  }

  private _callService(data: IProducts): void {
    this._productsService
      .updateProductsByUser(this.generalStatus.userId, data)
      .subscribe((res: IResProducts) => {
        if (res.success) {
          console.log(
            "XXX - ScheduledProductsComponent - _callService - res",
            res
          );
        }
        setTimeout(() => {
          this._statusService.spinnerHide();
        }, 500);
      });
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
