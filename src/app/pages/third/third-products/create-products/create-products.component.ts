import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { Subject, takeUntil } from "rxjs";
import { ISports } from "src/models/general/sports.interface";
import { IProducts, IResProduct } from "src/models/home/products.interface";
import { StatusModel } from "src/models/local/status-model";
import { ProductsService } from "src/services/home/products/products.service";
import { StatusService } from "src/services/local/status.service";

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
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _productsService: ProductsService
  ) {}

  ngOnInit() {
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
    this._statusService.spinnerShow();
    this._productsService
      .postCreateProduct(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResProduct) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - CreateProductsComponent - _callService - res : ",
              res
            );
            setTimeout(() => {
              const productsListScheduled = this.getProductsListScheduled;
              productsListScheduled.push(res.result!);
              this._statusService.setProductsListScheduled(
                productsListScheduled
              );
            }, 100);
            this._statusService.toastSuccess(
              this._translateService.instant("TOAST.CREATE")
            );
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
