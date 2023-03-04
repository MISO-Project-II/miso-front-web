import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import {
  IEvents,
  IResEvent,
  IResEvents,
} from "src/models/home/events.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-created-events",
  templateUrl: "./created-events.component.html",
  styleUrls: ["./created-events.component.scss"],
})
export class CreatedEventsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;

  private _eventSelected: IEvents;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _eventsService: EventsService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    console.log("XXX - CreatedEventsComponent (Eventos que creo el tercero)");
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
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsListScheduled(): IEvents[] {
    return this._statusService.getEventsListScheduled();
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
  }

  public delEvent(item: any): void {
    this._eventsService
      .delEvent(item.idEvent)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResEvent) => {
          if (!!res && res.success) {
            console.log("XXX - CreatedEventsComponent - delEvent - res", res);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }

  public addEvent(): void {
    const eventsListScheduled = this.getEventsListScheduled;
    eventsListScheduled.push(this._eventSelected);
    this._statusService.setEventsListScheduled(eventsListScheduled);
    console.log("XXX - addEvent", this.getEventsListScheduled);
    this._statusService.spinnerShow();
    const data: number[] = [];
    for (let index = 0; index < this.getEventsListScheduled.length; index++) {
      data.push(this.getEventsListScheduled[index].idEvent!);
    }

    this._callService(data);
  }

  private _callService(listScheduled: number[]): void {
    console.log(
      "XXX - CreatedEventsComponent - _callService - listScheduled",
      listScheduled
    );
    this._eventsService
      .putUserEvent(this.getGeneralStatus.userId, listScheduled)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IGenericResponse) => {
          if (!!res && res.success) {
            console.log(
              "XXX - CreatedEventsComponent - _callService - res",
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
