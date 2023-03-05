import { IGenericResponse } from "./../../../../../models/local/generic.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INTERMEDIATE_CONTRACT,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { IEvents, IResEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";

import { IPlan } from "src/models/update-plan/update-plan.interface";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";
import { UpdatePlanService } from "src/services/update-plan/update-plan.service";
import { UserDataService } from "src/services/user-data/user-data.service";

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
    private _userDataService: UserDataService
  ) {}
  ngOnInit() {
    console.log(
      "this._statusService.getPlanType()",
      this._statusService.getGeneralStatus().contractType
    );
    this._loadEvents();
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
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
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
            this._loadGeneralData(contractPlan);
          }
          this._statusService.spinnerHide();
          window.open("https://epayco.com/");
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
            this._statusService.setContractType(res.result?.userPlan!);
            // this._statusService.setContractType(contractPlan);
          }
          this._statusService.spinnerHide();
          // window.open("https://epayco.com/");
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
}
