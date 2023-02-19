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
  selector: "app-scheduled-events",
  templateUrl: "./scheduled-events.component.html",
  styleUrls: ["./scheduled-events.component.scss"],
})
export class ScheduledEventsComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _eventSelected: IEvents = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService
  ) {}

  ngOnInit(): void {
    this._loadGeneralStatus();
    this._loadEventsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getEvent$(): IEvents {
    return this._eventSelected;
  }
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEventsByUser(this.generalStatus.userId);
  }
  get getEventsListScheduled$(): Observable<IEvents[]> {
    return this._statusService.getEventsListScheduled$();
  }
  private _loadEventsScheduled(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (res.success) {
          this._statusService.setEventsListScheduled(res.result!);
          console.log(
            "XXX - ScheduledEventsComponent - _loadEventsScheduled - res",
            res
          );
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  /**
   * Cancelar evento inscrito por el usuario
   */
  private _onSubmit(): void {
    this._statusService.spinnerShow();
    this.getEventsListScheduled$
      .pipe(takeUntil(this._destroy$))
      .subscribe((listScheduled: IEvents[]) => {
        const data: IEvents = listScheduled[0];
        this._callService(data);
      });
  }

  public delEvent(item: any): void {
    this.getEventsListScheduled$
      .pipe(takeUntil(this._destroy$))
      .subscribe((listScheduled: IEvents[]) => {
        const eventsListScheduled = listScheduled.filter(
          (data) => data.id != item.id
        );
        this._statusService.setEventsListScheduled(eventsListScheduled);
        this._eventSelected = null!;
        this._onSubmit();
      });
  }

  private _callService(data: IEvents): void {
    this._eventsService
      .updateEventsByUser(this.generalStatus.userId, data)
      .subscribe((res: IResEvents) => {
        if (res.success) {
          console.log(
            "XXX - ScheduledEventsComponent - _callService - res",
            res
          );
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
