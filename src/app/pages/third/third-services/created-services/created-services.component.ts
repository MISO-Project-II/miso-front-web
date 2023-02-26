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
  IServices,
  IResService,
  IResServices,
} from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-created-services",
  templateUrl: "./created-services.component.html",
  styleUrls: ["./created-services.component.scss"],
})
export class CreatedServicesComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  private _serviceSelected: IServices;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _servicesService: ServicesService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log(
      "XXX - CreatedServicesComponent (Servicios que creo el tercero)"
    );
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getServicesService$(): Observable<IResServices> {
    return this._servicesService.getServices();
  }
  get getService$(): IServices {
    return this._serviceSelected;
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getServicesListScheduled(): IServices[] {
    return this._statusService.getServicesListScheduled();
  }
  public setService(serviceSelected: IServices) {
    this._serviceSelected = serviceSelected;
  }

  public delService(item: any): void {
    this._servicesService
      .delService(item.idService)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResService) => {
          if (res.success) {
            console.log(
              "XXX - CreatedServicesComponent - delService - res",
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

  public addService(): void {
    const servicesListScheduled = this.getServicesListScheduled;
    servicesListScheduled.push(this._serviceSelected);
    this._statusService.setServicesListScheduled(servicesListScheduled);
    console.log("XXX - addService", this.getServicesListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getServicesListScheduled.length; index++) {
      data.push(this.getServicesListScheduled[index].id!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - CreatedServicesComponent - _callService - listScheduled",
      listScheduled
    );
    this._servicesService
      .putUserService(this.getGeneralStatus.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (res.success) {
            console.log(
              "XXX - CreatedServicesComponent - _callService - res",
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
