import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import {
  IProducts,
  IReqProduct,
  IResProducts,
} from "src/models/home/products.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-search-products",
  templateUrl: "./search-products.component.html",
  styleUrls: ["./search-products.component.scss"],
})
export class SearchProductsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;

  private _productSelected: IProducts;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _productsService: ProductsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log("XXX - SearchProductsComponent");
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getProductsService$(): Observable<IResProducts> {
    return this._productsService.getProducts();
  }
  get getProduct$(): IProducts {
    return this._productSelected;
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getProductsList(): IProducts[] {
    return this._statusService.getProductsList();
  }
  get getProductsListScheduled(): IProducts[] {
    return this._statusService.getProductsListScheduled();
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
  }

  public addProduct(): void {
    this._statusService.spinnerShow();
    this._callService(this._productSelected);
  }

  private _callService(data: IProducts): void {
    this._productsService
      .updateProductsByUser(this.getGeneralStatus.userId, data)
      .subscribe((res: IResProducts) => {
        if (res.success) {
          console.log(
            "XXX - SearchProductsComponent - _callService - res",
            res
          );
          const productsListScheduled = this.getProductsListScheduled;
          productsListScheduled.push(data);
          this._statusService.setProductsListScheduled(productsListScheduled);
        }
        setTimeout(() => {
          this._statusService.spinnerHide();
        }, 500);
      });
  }
}
