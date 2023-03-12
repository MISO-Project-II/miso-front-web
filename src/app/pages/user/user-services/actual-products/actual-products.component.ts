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
  IResUserProducts,
} from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
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
  public thirdData: IThirdDataMap;
  private _productSelected: IProducts = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _statusService: StatusService,
    private _productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this._loadProductsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getProduct$(): IProducts {
    return this._productSelected;
  }
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
    this.thirdData = this.getThirdList$.filter(
      (data: IThirdDataMap) => data.idUser === productSelected.idUserCreator
    )[0];
  }
  get getProductsService$(): Observable<IResUserProducts> {
    return this._productsService.getUserProductSportsman(
      this._statusService.getGeneralStatus().userId
    );
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
  get getProductIdUserCreator$(): number {
    return this._productSelected.idUserCreator;
  }
  get getCurrency$() {
    return this._statusService?.getHomeUbication()?.currency;
  }
  get getLangLocation$() {
    return (
      this._statusService?.getLangLocation()?.lang +
      "-" +
      this._statusService?.getLangLocation()?.location
    );
  }
  private _loadProductsScheduled(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserProducts) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log("🚀 XXX - _loadProductsScheduled - res : ", res);
          setTimeout(() => {
            this._statusService.setProductsListScheduled(
              res.result["consume-product"]!
            );
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
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

  public delProduct(item: any): void {
    const productsListScheduled = this.getProductsListScheduled$.filter(
      (data: IProducts) => data.idProduct != item.idProduct
    );
    this._statusService.setProductsListScheduled(productsListScheduled);
    this._productSelected = null!;
    this._onSubmit();
  }

  private _callService(listScheduled: number[]): void {
    this._productsService
      .putUserProduct(
        this._statusService.getGeneralStatus().userId,
        listScheduled
      )
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            // XXX
            console.log("🚀 XXX - _callService - res : ", res);
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
