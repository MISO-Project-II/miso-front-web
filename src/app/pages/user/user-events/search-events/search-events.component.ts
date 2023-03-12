import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { IEvents, IResEvents } from "src/models/home/events.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-search-events",
  templateUrl: "./search-events.component.html",
  styleUrls: ["./search-events.component.scss"],
})
export class SearchEventsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  public thirdData: IThirdDataMap;
  eventsList: IEvents[] = [];
  loading: boolean = true;

  private _eventSelected: IEvents;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _eventsService: EventsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    this.eventsList = this.getEventsList$;
    this.loading = false;
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  get getEvent$(): IEvents {
    return this._eventSelected;
  }
  get getEventDate$(): Date {
    return new Date(this._eventSelected.date);
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsListScheduled$(): IEvents[] {
    return this._statusService.getEventsListScheduled();
  }
  get getEventIdSports$(): number {
    return this._eventSelected.idSport;
  }
  get getSports$(): ISports[] {
    return this._statusService.getSportsList();
  }
  get getEventSportSelected$(): ISports {
    return this._statusService
      .getSportsList()
      .filter((sport: ISports) => sport.idsports === this.getEventIdSports$)
      .map((sport) => sport)[0];
  }
  get getEventIdUserCreator$(): number {
    return this._eventSelected.idUserCreator;
  }
  get getEventsList$(): IEvents[] {
    return this._statusService.getEventsList()?.filter((data: IEvents) => {
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
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
    this.thirdData = this.getThirdList$.filter(
      (data: IThirdDataMap) => data.idUser === eventSelected.idUserCreator
    )[0];
  }

  public addEvent(): void {
    const eventsListScheduled = this.getEventsListScheduled$;
    eventsListScheduled.push(this._eventSelected);
    this._statusService.setEventsListScheduled(eventsListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getEventsListScheduled$.length; index++) {
      data.push(this.getEventsListScheduled$[index].idEvent!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    this._eventsService
      .putUserEvent(this.getGeneralStatus$.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            // XXX
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
  @HostListener("window:setEventById", ["$event"])
  setEventById($event: CustomEvent) {
    let idEvent = Number($event.detail || "0");
    let interval = setInterval(() => {
      if (!this.loading) {
        let event = this.eventsList.find((e) => e.idEvent == idEvent);
        if (event) {
          this.setEvent(event);
        }
        clearInterval(interval);
      }
    }, 1000);
  }
}
