import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
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
  IResProduct,
  IResProducts,
  IResUserProducts,
} from "src/models/home/products.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-create-products",
  templateUrl: "./create-products.component.html",
  styleUrls: ["./create-products.component.scss"],
})
export class CreateProductsComponent implements OnInit, OnDestroy {
  public formUserCreateProduct: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public sportName: string;
  constructor(
    private _statusService: StatusService,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
    console.log("XXX - CreateProductComponent");
    this._initForm();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formUserCreateProduct = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      IdSport: new FormControl("", [Validators.required]),
      eventType: new FormControl("", [Validators.required]),
      contractType: new FormControl("", [Validators.required]),
    });
  }
  get getSports$(): ISports[] {
    return this._statusService.getSportsList();
  }
  public addSport(item: ISports): void {
    this.formUserCreateProduct.get("IdSport")?.patchValue(item?.idsports);
    this.sportName = item.name;
  }
  get getForm() {
    return this.formUserCreateProduct.controls;
  }
  get getName() {
    return this.formUserCreateProduct.get("name");
  }
  get getDescription() {
    return this.formUserCreateProduct.get("description");
  }
  get getPrice() {
    return this.formUserCreateProduct.get("price");
  }

  get getIdSport() {
    return this.formUserCreateProduct.get("IdSport");
  }

  get getEventType() {
    return this.formUserCreateProduct.get("eventType");
  }
  get getContractType() {
    return this.formUserCreateProduct.get("contractType");
  }

  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getProductsListScheduled(): IProducts[] {
    return this._statusService.getProductsListScheduled();
  }
  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IProducts = {
      name: this.getName?.value,
      description: this.getDescription?.value,
      price: this.getPrice?.value,
      idUserCreator: this.getGeneralStatus.userId,
      idSport: this.getIdSport?.value,
      eventType: this.getEventType?.value,
      contractType: this.getContractType?.value,
    };
    this._callService(data);
  }
  private _callService(data: IProducts): void {
    this._productsService
      .postCreateProduct(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResProduct) => {
          if (!!res && res.success) {
            console.log(
              "XXX - CreateProductsComponent - _callService - res",
              res
            );
            const productsListScheduled = this.getProductsListScheduled;
            productsListScheduled.push(res.result!);
            this._statusService.setProductsListScheduled(productsListScheduled);
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
