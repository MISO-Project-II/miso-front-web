import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { IResServices, IServices } from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-search-services",
  templateUrl: "./search-services.component.html",
  styleUrls: ["./search-services.component.scss"],
})
export class SearchServicesComponent implements OnInit, OnDestroy {
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
    console.log("🚀 XXX - SearchServicesComponent (Servicios que ya existen)");
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
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getServicesList$(): IServices[] {
    return this._statusService.getServicesList().filter((data: IServices) => {
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
  get getServicesListScheduled$(): IServices[] {
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
  get getServiceIdUserCreator$(): number {
    return this._serviceSelected.idUserCreator;
  }
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  public setService(serviceSelected: IServices) {
    this._serviceSelected = serviceSelected;
    this.thirdData = this.getThirdList$.filter(
      (data: IThirdDataMap) => data.idUser === serviceSelected.idUserCreator
    )[0];
  }

  public addService(): void {
    const servicesListScheduled = this.getServicesListScheduled$;
    servicesListScheduled.push(this._serviceSelected);
    this._statusService.setServicesListScheduled(servicesListScheduled);
    const data: number[] = [];
    for (
      let index = 0;
      index < this.getServicesListScheduled$.length;
      index++
    ) {
      data.push(this.getServicesListScheduled$[index].id!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    this._statusService.spinnerShow();
    this._servicesService
      .putUserService(this.getGeneralStatus$.userId, listScheduled)
      .subscribe((res: IGenericResponse) => {
        if (!!res && res.success) {
          // XXX
          console.log(
            "🚀 XXX - SearchServicesComponent - .subscribe - res : ",
            res
          );
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      });
  }
}
