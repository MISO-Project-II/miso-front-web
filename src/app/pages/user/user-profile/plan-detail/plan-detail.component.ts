import { Router } from "@angular/router";
import { IGenericResponse } from "./../../../../../models/local/generic.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil, timeout } from "rxjs";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { IEvents, IResEvents } from "src/models/home/events.interface";
import { IResServices, IServices } from "src/models/home/services.interface";
import { StatusModel } from "src/models/local/status-model";

import { IPlan } from "src/models/update-plan/update-plan.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { EventsService } from "src/services/home/events/events.service";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UpdatePlanService } from "src/services/update-plan/update-plan.service";
import { UserDataService } from "src/services/user-data/user-data.service";
import { ROUTES_NAMES } from "src/constanst/routes";
import { IProducts } from "src/models/home/products.interface";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-plan-detail",
  templateUrl: "./plan-detail.component.html",
  styleUrls: ["./plan-detail.component.scss"],
})
export class PlanDetailComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _updatePlanService: UpdatePlanService,
    private _eventsService: EventsService,
    private _servicesService: ServicesService,
    private _userDataService: UserDataService,
    private _router: Router
  ) {}
  ngOnInit() {
    this._loadEvents();
    this._loadServices();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getContractType$(): string {
    return this._statusService.getGeneralStatus().contractType;
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  get getServicesService$(): Observable<IResServices> {
    return this._servicesService.getServices();
  }
  get getEventsList(): IEvents[] {
    return this._statusService.getEventsList();
  }
  get getEventsListFree(): IEvents[] {
    return this._statusService
      .getEventsList()
      .filter((data: IEvents) => data.contractType === FREE_CONTRACT);
  }
  get getEventsListIntermediate(): IEvents[] {
    return this._statusService
      .getEventsList()
      .filter((data: IEvents) => data.contractType === INTERMEDIATE_CONTRACT);
  }
  get getEventsListPremium(): IEvents[] {
    return this._statusService
      .getEventsList()
      .filter((data: IEvents) => data.contractType === PREMIUM_CONTRACT);
  }
  get getServicesList(): IServices[] {
    return this._statusService.getServicesList();
  }
  get getServicesListFree(): IServices[] {
    return this._statusService
      .getServicesList()
      .filter((data: IServices) => data.contractType === FREE_CONTRACT);
  }
  get getServicesListIntermediate(): IServices[] {
    return this._statusService
      .getServicesList()
      .filter((data: IServices) => data.contractType === INTERMEDIATE_CONTRACT);
  }
  get getServicesListPremium(): IServices[] {
    return this._statusService
      .getServicesList()
      .filter((data: IServices) => data.contractType === PREMIUM_CONTRACT);
  }
  get getProductsListFree(): IProducts[] {
    return this._statusService
      .getProductsList()
      .filter((data: IProducts) => data.contractType === FREE_CONTRACT);
  }
  get getProductsListIntermediate(): IProducts[] {
    return this._statusService
      .getProductsList()
      .filter((data: IProducts) => data.contractType === INTERMEDIATE_CONTRACT);
  }
  get getProductsListPremium(): IProducts[] {
    return this._statusService
      .getProductsList()
      .filter((data: IProducts) => data.contractType === PREMIUM_CONTRACT);
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get isMobile() {
    return this._statusService.getIsMobile();
  }
  public onSubmitPlanDetail(contractType: string): void {
    const data: IPlan = {
      idPlan: contractType,
    };
    this._updatePlan(data); // XXX VALIDAR FUNCIONAMEINTO
    this.setContractTpe(contractType);
  }

  private _updatePlan(data: IPlan): void {
    this._statusService.spinnerShow();
    this._updatePlanService
      .updateContract(this.getGeneralStatus.userId, data)
      .subscribe(
        (res) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - PlanDetailComponent - _updatePlan - res : ",
              res
            );
            setTimeout(() => {
              this._loadUpdatePlan(res.result?.idPlan!);
            }, 100);
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

  private _loadUpdatePlan(contractPlan: string): void {
    this._statusService.spinnerShow();
    this._userDataService
      .updatePlan(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - PlanDetailComponent - _loadUpdatePlan - res : ",
              res
            );
            setTimeout(() => {
              this._loadGeneralData(contractPlan);
              window.open("https://epayco.com/");
              this._router.navigate([
                this.getGeneralStatus.userUrl + ROUTES_NAMES.HOME,
              ]);
            }, 1000);
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
  private _loadGeneralData(contractPlan: string): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - PlanDetailComponent - _loadGeneralData - res : ",
              res
            );
            setTimeout(() => {
              this._statusService.setContractType(contractPlan);
            }, 100);
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
  private _loadEvents(): void {
    this._statusService.spinnerShow();
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - PlanDetailComponent - _loadEvents - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setEventsList(res.result!);
          }, 100);
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
  private _loadServices(): void {
    this._statusService.spinnerShow();
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - PlanDetailComponent - _loadServices - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setServicesList(res.result!);
          }, 100);
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
  public setContractTpe(contractType: string): void {
    this._statusService.spinnerShow();
    this._statusService.spinnerShow();
    const data: IUserData = {
      username: this.getGeneralStatus$?.username,
      name: this.getGeneralStatus$?.name,
      lastName: this.getGeneralStatus$?.lastName,
      idIdentificationType: this.getGeneralStatus$?.idIdentificationType,
      identificationNumber: this.getGeneralStatus$?.identificationNumber,
      birthdUbication: this.getGeneralStatus$?.birthdUbication,
      homeUbication: this.getGeneralStatus$?.homeUbication,
      gender: this.getGeneralStatus$?.gender,
      age: this.getGeneralStatus$?.age,
      weight: this.getGeneralStatus$?.weight,
      height: this.getGeneralStatus$?.height,
      userPlan: contractType,
      isVegan: this.getGeneralStatus.isVegan,
      isvegetarian: this.getGeneralStatus.isvegetarian,
      imc: this.getGeneralStatus$?.imc,
      idSportPlan: this.getGeneralStatus$?.idFoodPlan,
      idFoodPlan: this.getGeneralStatus$?.idFoodPlan,
    };
    this._callService(data);
  }
  private _callService(data: IUserData): void {
    this._userDataService
      .updateGeneralData(this.getGeneralStatus$.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - SportPlanComponent - _callService - res : ",
              res
            );
            setTimeout(() => {
              window.open("https://paynopain.com/pasarelas-pago/", "_blank");
              this._router.navigate([
                this.getGeneralStatus.userUrl + ROUTES_NAMES.HOME,
              ]);
            }, 100);
            this._statusService.spinnerHide();
            this._statusService.toastSuccess(
              this._translateService.instant("TOAST.UPDATE")
            );
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
