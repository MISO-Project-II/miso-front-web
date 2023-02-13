import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-events",
  templateUrl: "./user-events.component.html",
  styleUrls: ["./user-events.component.scss"],
})
export class UserEventsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService
  ) {}

  ngOnInit() {
    console.log("XXX - UserEventsComponent");
    this._loadEvents();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (res.success) {
          this._statusService.setEventsList(res.result!);
          console.log("XXX - UserDashboardComponent - _loadEvents - res", res);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
