import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import {
  IResServices,
  IResUserServices,
  IServices,
} from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-actual-services",
  templateUrl: "./actual-services.component.html",
  styleUrls: ["./actual-services.component.scss"],
})
export class ActualServicesComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _serviceSelected: IServices = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    console.log(
      "XXX - ActualServicesComponent (Servicios Inscritos por el usuario)"
    );
    this._loadServicesScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getService$(): IServices {
    return this._serviceSelected;
  }
  public setService(serviceSelected: IServices) {
    this._serviceSelected = serviceSelected;
  }
  get getServicesService$(): Observable<IResUserServices> {
    return this._servicesService.getUserServiceSportsman(
      this._statusService.getGeneralStatus().userId
    );
  }
  get getServicesListScheduled(): IServices[] {
    return this._statusService.getServicesListScheduled();
  }
  private _loadServicesScheduled(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserServices) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log(
            "XXX - ActualServicesComponent - _loadServicesScheduled - res",
            res
          );
          this._statusService.setServicesListScheduled(
            res.result["consume-services"]!
          );
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  /**
   * Cancelar serviceo inscrito por el usuario
   */
  private _onSubmit(): void {
    console.log("XXX - _onSubmit", this.getServicesListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getServicesListScheduled.length; index++) {
      data.push(this.getServicesListScheduled[index].id!);
    }
    this._callService(data);
  }

  public delService(item: any): void {
    const servicesListScheduled = this.getServicesListScheduled.filter(
      (data: IServices) => data.id != item.id
    );
    this._statusService.setServicesListScheduled(servicesListScheduled);
    this._serviceSelected = null!;
    this._onSubmit();
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - ScheduledServicesComponent - _callService - listScheduled",
      listScheduled
    );
    this._servicesService
      .putUserService(
        this._statusService.getGeneralStatus().userId,
        listScheduled
      )
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "XXX - ScheduledServicesComponent - _callService - res",
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
