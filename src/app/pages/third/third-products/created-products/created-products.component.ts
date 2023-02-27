import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import {
  IProducts,
  IResProduct,
  IResProducts,
} from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-created-products",
  templateUrl: "./created-products.component.html",
  styleUrls: ["./created-products.component.scss"],
})
export class CreatedProductsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  private _productSelected: IProducts;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _productsService: ProductsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log(
      "XXX - CreatedProductsComponent (Productos que creo el tercero)"
    );
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
  get getProductsListScheduled(): IProducts[] {
    return this._statusService.getProductsListScheduled();
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
  }

  public delProduct(item: any): void {
    this._productsService
      .delProduct(item.idProduct)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResProduct) => {
          if (res.success) {
            console.log(
              "XXX - CreatedProductsComponent - delProduct - res",
              res
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

  public addProduct(): void {
    const productsListScheduled = this.getProductsListScheduled;
    productsListScheduled.push(this._productSelected);
    this._statusService.setProductsListScheduled(productsListScheduled);
    console.log("XXX - addProduct", this.getProductsListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getProductsListScheduled.length; index++) {
      data.push(this.getProductsListScheduled[index].idProduct!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - CreatedProductsComponent - _callService - listScheduled",
      listScheduled
    );
    this._productsService
      .putUserProduct(this.getGeneralStatus.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (res.success) {
            console.log(
              "XXX - CreatedProductsComponent - _callService - res",
              res
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
