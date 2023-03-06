import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, Observable, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import {
  IProducts,
  IResProducts,
  IResUserProducts,
} from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
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
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  private _productSelected: IProducts = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _statusService: StatusService,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    console.log(
      "XXX - ActualProductsComponent (Productos Inscritos por el usuario)"
    );
    this._loadProductsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getProduct$(): IProducts {
    return this._productSelected;
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
  }
  get getProductsService$(): Observable<IResUserProducts> {
    return this._productsService.getUserProductSportsman(
      this._statusService.getGeneralStatus().userId
    );
  }
  get getProductsListScheduled(): IProducts[] {
    return this._statusService.getProductsListScheduled();
  }
  get getProductIdSports$(): number {
    return this._productSelected.idSport;
  }
  get getProductSportSelected$(): string {
    return this._statusService
      .getSportsList()
      .filter((sport: ISports) => sport.idsports === this.getProductIdSports$)
      .map((sport) => sport.name)[0];
  }

  private _loadProductsScheduled(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserProducts) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log(
            "XXX - ScheduledProductsComponent - _loadProductsScheduled - res",
            res
          );
          this._statusService.setProductsListScheduled(
            res.result["consume-product"]!
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
  /**
   * Cancelar producto inscrito por el usuario
   */
  private _onSubmit(): void {
    console.log("XXX - _onSubmit", this.getProductsListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getProductsListScheduled.length; index++) {
      data.push(this.getProductsListScheduled[index].idProduct!);
    }
    this._callService(data);
  }

  public delProduct(item: any): void {
    const productsListScheduled = this.getProductsListScheduled.filter(
      (data: IProducts) => data.idProduct != item.idProduct
    );
    this._statusService.setProductsListScheduled(productsListScheduled);
    this._productSelected = null!;
    this._onSubmit();
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - ScheduledProductsComponent - _callService - listScheduled",
      listScheduled
    );
    this._productsService
      .putUserProduct(
        this._statusService.getGeneralStatus().userId,
        listScheduled
      )
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "XXX - ScheduledProductsComponent - _callService - res",
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
