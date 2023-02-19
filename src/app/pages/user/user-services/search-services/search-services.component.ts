import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { IResServices, IServices } from "src/models/home/services.interface";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-search-services",
  templateUrl: "./search-services.component.html",
  styleUrls: ["./search-services.component.scss"],
})
export class SearchServicesComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;

  private _serviceSelected: IServices;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  constructor(
    private _servicesService: ServicesService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log("XXX - SearchServicesComponent");
    this._loadGeneralStatus();
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
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  get getServicesList$(): Observable<IServices[]> {
    return this._statusService.getServicesList$();
  }
  get getServicesListScheduled$(): Observable<IServices[]> {
    return this._statusService.getServicesListScheduled$();
  }
  public setService(serviceSelected: IServices) {
    this._serviceSelected = serviceSelected;
  }

  public addService(): void {
    this._statusService.spinnerShow();
    this._callService(this._serviceSelected);
  }

  private _callService(data: IServices): void {
    this._servicesService
      .updateServicesByUser(this.generalStatus.userId, data)
      .subscribe((res: IResServices) => {
        if (res.success) {
          console.log(
            "XXX - SearchServicesComponent - _callService - res",
            res
          );
          this.getServicesListScheduled$
            .pipe(takeUntil(this._destroy$))
            .subscribe((listScheduled: IServices[]) => {
              const servicesListScheduled = listScheduled;
              servicesListScheduled.push(data);
              this._statusService.setServicesListScheduled(
                servicesListScheduled
              );
            });
        }
        setTimeout(() => {
          this._statusService.spinnerHide();
        }, 500);
      });
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
