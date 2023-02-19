import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import {
  IEvents,
  IReqEvent,
  IResEvents,
} from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
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
  public generalStatus: StatusModel;

  private _eventSelected: IEvents;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _eventsService: EventsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log("XXX - SearchEventsComponent");
    this._loadGeneralStatus();
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
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  get getEventsList$(): Observable<IEvents[]> {
    return this._statusService.getEventsList$();
  }
  get getEventsListScheduled$(): Observable<IEvents[]> {
    return this._statusService.getEventsListScheduled$();
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
  }

  public addEvent(): void {
    this._statusService.spinnerShow();
    this._callService(this._eventSelected);
  }

  private _callService(data: IEvents): void {
    this._eventsService
      .updateEventsByUser(this.generalStatus.userId, data)
      .subscribe((res: IResEvents) => {
        if (res.success) {
          console.log("XXX - SearchEventsComponent - _callService - res", res);
          this.getEventsListScheduled$
            .pipe(takeUntil(this._destroy$))
            .subscribe((listScheduled: IEvents[]) => {
              const eventsListScheduled = listScheduled;
              eventsListScheduled.push(data);
              this._statusService.setEventsListScheduled(eventsListScheduled);
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
