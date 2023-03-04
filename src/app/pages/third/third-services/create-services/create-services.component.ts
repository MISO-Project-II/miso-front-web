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
import {
  IServices,
  IResService,
  IResServices,
  IResUserServices,
} from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-create-services",
  templateUrl: "./create-services.component.html",
  styleUrls: ["./create-services.component.scss"],
})
export class CreateServicesComponent implements OnInit, OnDestroy {
  public formUserCreateService: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit() {
    console.log("XXX - CreateServiceComponent");
    this._initForm();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formUserCreateService = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      IdSport: new FormControl("Futbol"), // XXX
      price: new FormControl(""),
      contract: new FormControl(""),
      ubicationType: new FormControl(""),
    });
  }
  get getForm() {
    return this.formUserCreateService.controls;
  }
  get getDescription() {
    return this.formUserCreateService.get("description");
  }
  get getName() {
    return this.formUserCreateService.get("name");
  }
  get getPrice() {
    return this.formUserCreateService.get("price");
  }

  get getIdSport() {
    return this.formUserCreateService.get("IdSport");
  }

  get getContractType() {
    return this.formUserCreateService.get("contract");
  }
  get getUbicationType() {
    return this.formUserCreateService.get("ubicationType");
  }

  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getServicesListScheduled(): IServices[] {
    return this._statusService.getServicesListScheduled();
  }
  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IServices = {
      name: this.getName?.value,
      description: this.getDescription?.value,
      price: this.getPrice?.value,
      idUserCreator: this.getGeneralStatus.userId,
      idSport: 1,
      // serviceType: OUTSIDE_OF_HOUSE,
      contract: FREE_CONTRACT,
    };
    this._callService(data);
  }
  private _callService(data: IServices): void {
    this._servicesService
      .postCreateService(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResService) => {
          if (!!res && res.success) {
            console.log(
              "XXX - CreateServicesComponent - _callService - res",
              res
            );
            const servicesListScheduled = this.getServicesListScheduled;
            servicesListScheduled.push(res.result!);
            this._statusService.setServicesListScheduled(servicesListScheduled);
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
