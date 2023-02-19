import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { IEvents, IResEvents } from "src/models/home/events.interface";
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

  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService
  ) {}

  ngOnInit(): void {
    console.log("XXX - ScheduledEventsComponent - ngOnInit - ngOnInit");
    // this._loadEventsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getEvent$(): IEvents {
    return this._eventSelected;
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
  }
  // get getEventsService$(): Observable<IResEvents> {
  //   return this._eventsService.getEventsByUser(
  //     this._statusService.getGeneralStatus().userId
  //   );
  // }
  get getEventsListScheduled(): IEvents[] {
    return this._statusService.getEventsListScheduled();
  }
  // private _loadEventsScheduled(): void {
  //   this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
  //     (res: IResEvents) => {
  //       if (res.success) {
  //         this._statusService.setEventsListScheduled(res.result!);
  //         console.log(
  //           "XXX - ScheduledEventsComponent - _loadEventsScheduled - res",
  //           res
  //         );
  //       }
  //       this._statusService.spinnerHide();
  //     },
  //     (err) => {
  //       console.error(err);
  //       this._statusService.spinnerHide();
  //     }
  //   );
  // }
  /**
   * Cancelar evento inscrito por el usuario
   */
  private _onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IEvents = this.getEventsListScheduled[0];
    // this._callService(data);
  }

  // public delEvent(item: any): void {
  //   const eventsListScheduled = this.getEventsListScheduled.filter(
  //     (data) => data.id != item.id
  //   );
  //   this._statusService.setEventsListScheduled(eventsListScheduled);
  //   this._eventSelected = null!;
  //   this._onSubmit();
  // }

  // private _callService(data: IEvents): void {
  //   this._eventsService
  //     .updateEventsByUser(this._statusService.getGeneralStatus().userId, data)
  //     .pipe(takeUntil(this._destroy$))
  //     .subscribe(
  //       (res: IResEvents) => {
  //         if (res.success) {
  //           console.log(
  //             "XXX - ScheduledEventsComponent - _callService - res",
  //             res
  //           );
  //         }
  //         this._statusService.spinnerHide();
  //       },
  //       (err) => {
  //         console.error(err);
  //         this._statusService.spinnerHide();
  //       }
  //     );
  // }
}
