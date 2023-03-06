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
import { IResUserData } from "src/models/user-data/user-data.interface";
import { EventsService } from "src/services/home/events/events.service";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UpdatePlanService } from "src/services/update-plan/update-plan.service";
import { UserDataService } from "src/services/user-data/user-data.service";
import { ROOT_ROUTES_NAMES } from "src/app/app.routing";
import { ROUTES_NAMES } from "src/constanst/routes";

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
    private _statusService: StatusService,
    private _updatePlanService: UpdatePlanService,
    private _eventsService: EventsService,
    private _servicesService: ServicesService,
    private _userDataService: UserDataService,
    private _router: Router
  ) {}
  ngOnInit() {
    console.log(
      "this._statusService.getPlanType()",
      this._statusService.getGeneralStatus().contractType
    );
    this._loadEvents();
    this._loadServices();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getContractType(): string {
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
      .filter((data: IServices) => data.contract === FREE_CONTRACT);
  }
  get getServicesListIntermediate(): IServices[] {
    return this._statusService
      .getServicesList()
      .filter((data: IServices) => data.contract === INTERMEDIATE_CONTRACT);
  }
  get getServicesListPremium(): IServices[] {
    return this._statusService
      .getServicesList()
      .filter((data: IServices) => data.contract === PREMIUM_CONTRACT);
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get isMobile() {
    return this._statusService.getIsMobile();
  }
  public onSubmit(contractType: string): void {
    this._statusService.spinnerShow();
    const data: IPlan = {
      idPlan: contractType,
    };
    this._updatePlan(data);
  }

  private _updatePlan(data: IPlan): void {
    this._updatePlanService
      .updateContract(this.getGeneralStatus.userId, data)
      .subscribe(
        (res) => {
          if (!!res && res.success) {
            this._statusService.spinnerHide();
            this._loadUpdatePlan(res.result?.idPlan!);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }

  private _loadUpdatePlan(contractPlan: string): void {
    console.log("XXX-llama plan detail?");

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
            this._statusService.spinnerShow(1000);
            setTimeout(() => {
              this._loadGeneralData(contractPlan);
              window.open("https://epayco.com/");
              this._router.navigate([
                this.getGeneralStatus.userUrl + ROUTES_NAMES.HOME,
              ]);
              // window.location.reload();
            }, 1000);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
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
            // this._statusService.setContractType(res.result?.userPlan!);
            this._statusService.setContractType(contractPlan);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (!!res && res.success) {
          console.log("XXX - UserEventsComponent - _loadEvents - res", res);
          this._statusService.setEventsList(res.result!);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadServices(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (!!res && res.success) {
          console.log("XXX - UserServicesComponent - _loadServices - res", res);
          this._statusService.setServicesList(res.result!);
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
