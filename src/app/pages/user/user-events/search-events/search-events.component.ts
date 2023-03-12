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
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

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
  public eventNameUserCreator: IUserData;
  eventsList: IEvents[] = [];
  loading: boolean = true;

  private _eventSelected: IEvents;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _eventsService: EventsService,
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    console.log("XXX - SearchEventsComponent (Eventos que ya existen)");
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
    return this._statusService.getEventsList().filter((data: IEvents) => {
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
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
    // XXX Validar si se consume siempre este dato
    // this.loadThirdName(eventSelected.idUserCreator);
  }

  public addEvent(): void {
    const eventsListScheduled = this.getEventsListScheduled$;
    eventsListScheduled.push(this._eventSelected);
    this._statusService.setEventsListScheduled(eventsListScheduled);
    console.log("XXX - addEvent", this.getEventsListScheduled$);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getEventsListScheduled$.length; index++) {
      data.push(this.getEventsListScheduled$[index].idEvent!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - SearchEventsComponent - _callService - listScheduled",
      listScheduled
    );
    this._eventsService
      .putUserEvent(this.getGeneralStatus$.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "XXX - SearchEventsComponent - _callService - res",
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
  public loadThirdName(id: number): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus$.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            this.eventNameUserCreator = res.result!;
          }
          this._statusService.spinnerHide();
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
