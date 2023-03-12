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
import {
  IServices,
  IResService,
  IResServices,
} from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
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
  public thirdData: IThirdDataMap;
  private _serviceSelected: IServices;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _servicesService: ServicesService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log(
      "🚀 XXX - CreatedServicesComponent (Servicios que creo el tercero)"
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
  get getServiceIdSports$(): number {
    return this._serviceSelected.idSport;
  }
  get getServiceSportSelected$(): ISports {
    return this._statusService
      .getSportsList()
      .filter((sport: ISports) => sport.idsports === this.getServiceIdSports$)
      .map((sport) => sport)[0];
  }
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  get getServiceIdUserCreator$(): number {
    return this._serviceSelected.idUserCreator;
  }
  public setService(serviceSelected: IServices) {
    this._serviceSelected = serviceSelected;
    this.thirdData = this.getThirdList$.filter(
      (data: IThirdDataMap) => data.idUser === serviceSelected.idUserCreator
    )[0];
  }

  public delService(item: any): void {
    this._servicesService
      .delService(item.id)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResService) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - CreatedServicesComponent - delService - res : ",
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

  public addService(): void {
    const servicesListScheduled = this.getServicesListScheduled;
    servicesListScheduled.push(this._serviceSelected);
    this._statusService.setServicesListScheduled(servicesListScheduled);
    const data: number[] = [];
    for (let index = 0; index < this.getServicesListScheduled.length; index++) {
      data.push(this.getServicesListScheduled[index].id!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    this._statusService.spinnerShow();
    this._servicesService
      .putUserService(this.getGeneralStatus.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            // XXX
            console.log(
              "🚀 XXX - CreatedServicesComponent - _callService - res : ",
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
