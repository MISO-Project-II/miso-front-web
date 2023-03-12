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
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

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
  public thirdData: IThirdDataMap;

  private _productSelected: IProducts;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _productsService: ProductsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log("🚀 XXX - SearchProductsComponent (Productos que ya existen)");
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
    return this._statusService.getProductsList().filter((data: IProducts) => {
      var contract = data.contractType === FREE_CONTRACT;
      switch (this.getContractType$) {
        case FREE_CONTRACT:
          contract = data.contractType === FREE_CONTRACT;
          break;
        case INTERMEDIATE_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT;
          break;
        case PREMIUM_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT ||
            data.contractType === PREMIUM_CONTRACT;
          break;
      }
      return contract;
    });
  }
  get getContractType$(): string {
    return this._statusService.getGeneralStatus().contractType;
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
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  public setProduct(productSelected: IProducts) {
    this._productSelected = productSelected;
    this.thirdData = this.getThirdList$.filter(
      (data: IThirdDataMap) => data.idUser === productSelected.idUserCreator
    )[0];
  }

  public addProduct(): void {
    const productsListScheduled = this.getProductsListScheduled$;
    productsListScheduled.push(this._productSelected);
    this._statusService.setProductsListScheduled(productsListScheduled);
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
    this._productsService
      .putUserProduct(this.getGeneralStatus$.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            // XXX
            console.log(
              "🚀 XXX - SearchProductsComponent - _callService - res : ",
              res
            );
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
