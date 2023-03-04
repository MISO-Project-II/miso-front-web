import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResUserEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { EventsService } from "src/services/home/events/events.service";
import { StatusService } from "src/services/local/status.service";
import { RoutesService } from "src/services/general/routes.service";

@Component({
  selector: "app-third-events",
  templateUrl: "./third-events.component.html",
  styleUrls: ["./third-events.component.scss"],
})
export class ThirdEventsComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _eventsService: EventsService,
    private _routesService: RoutesService
  ) {}

  ngOnInit() {
    console.log("XXX - ThirdEventsComponent (Contiene a eventos y rutas)");
    this._loadEventsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsService$(): Observable<IResUserEvents> {
    return this._eventsService.getUserEventThird(
      this._statusService.getGeneralStatus().userId
    );
  }
  private _loadEventsScheduled(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserEvents) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log(
            "XXX - ScheduledEventsComponent - _loadEventsScheduled - res",
            res
          );
          this._statusService.setEventsListScheduled(
            res.result["produce-event"]!
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
