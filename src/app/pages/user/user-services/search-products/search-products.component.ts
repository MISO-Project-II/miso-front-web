import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { IProducts, IResProducts } from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
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
    console.log("XXX - SearchProductsComponent (Productos que ya existen)");
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
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getProductsList$(): IProducts[] {
    return this._statusService.getProductsList();
  }
  get getProductsListScheduled$(): IProducts[] {
    return this._statusService.getProductsListScheduled();
  }
  get getProductIdSports$(): number {
    return this._productSelected.idSport;
  }
  get getProductSportSelected$(): ISports {
    return this._statusService
      .getSportsList()
      .filter((sport: ISports) => sport.idsports === this.getProductIdSports$)
      .map((sport) => sport)[0];
  }

  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
  }

  public addProduct(): void {
    const productsListScheduled = this.getProductsListScheduled$;
    productsListScheduled.push(this._productSelected);
    this._statusService.setProductsListScheduled(productsListScheduled);
    console.log("XXX - addProduct", this.getProductsListScheduled$);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (
      let index = 0;
      index < this.getProductsListScheduled$.length;
      index++
    ) {
      data.push(this.getProductsListScheduled$[index].idProduct!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - SearchProductsComponent - _callService - listScheduled",
      listScheduled
    );
    this._productsService
      .putUserProduct(this.getGeneralStatus$.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "XXX - SearchProductsComponent - _callService - res",
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
