import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
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
  IResUserServices,
  IServices,
} from "src/models/home/services.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-actual-services",
  templateUrl: "./actual-services.component.html",
  styleUrls: ["./actual-services.component.scss"],
})
export class ActualServicesComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  public thirdData: IThirdDataMap;
  private _serviceSelected: IServices = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    this._loadServicesScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getService$(): IServices {
    return this._serviceSelected;
  }
  get getServicesService$(): Observable<IResUserServices> {
    return this._servicesService.getUserServiceSportsman(
      this._statusService.getGeneralStatus().userId
    );
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
  private _loadServicesScheduled(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserServices) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - _loadServicesScheduled - res : ", res);
          // if (!!res) {
          setTimeout(() => {
            this._statusService.setServicesListScheduled(
              res.result["consume-services"]!
            );
          }, 100);
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

  public delService(item: any): void {
    const servicesListScheduled = this.getServicesListScheduled$.filter(
      (data: IServices) => data.id != item.id
    );
    this._statusService.setServicesListScheduled(servicesListScheduled);
    this._serviceSelected = null!;
    this._onSubmit();
  }

  private _callService(listScheduled: number[]): void {
    this._statusService.spinnerShow();
    this._servicesService
      .putUserService(
        this._statusService.getGeneralStatus().userId,
        listScheduled
      )
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log("🚀 XXX - _callService - res : ", res);
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
