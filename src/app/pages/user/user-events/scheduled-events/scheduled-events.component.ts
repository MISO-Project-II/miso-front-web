import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { IEvents, IResUserEvents } from "src/models/home/events.interface";
import { IGenericResponse } from "src/models/local/generic.interface";
import { IThirdDataMap } from "src/models/third-data/third-data.interface";
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
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  public thirdData: IThirdDataMap;
  private _eventSelected: IEvents = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _eventsService: EventsService
  ) {}

  ngOnInit(): void {
    console.log("🚀 XXX - ngOnInit (Eventos Inscritos por el usuario) ");
    this._loadEventsScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getEvent$(): IEvents {
    return this._eventSelected;
  }
  get getEventDate$(): Date {
    return new Date(this._eventSelected.date);
  }
  get getEventIdSports$(): number {
    return this._eventSelected.idSport;
  }
  get getEventSportSelected$(): string {
    return this._statusService
      .getSportsList()
      .filter((sport: ISports) => sport.idsports === this.getEventIdSports$)
      .map((sport) => sport.name)[0];
  }
  get getEventIdUserCreator$(): number {
    return this._eventSelected.idUserCreator;
  }
  get getEventsService$(): Observable<IResUserEvents> {
    return this._eventsService.getUserEventSportsman(
      this._statusService.getGeneralStatus().userId
    );
  }
  get getEventsListScheduled$(): IEvents[] {
    return this._statusService.getEventsListScheduled();
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
  private _loadEventsScheduled(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserEvents) => {
        if (!!res && res.success) {
          // if (!!res) {
          console.log("🚀 XXX - _loadEventsScheduled - res : ", res);
          setTimeout(() => {
            this._statusService.setEventsListScheduled(
              res.result["consume-event"]!
            );
          }, 100);
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
  /**
   * Cancelar evento inscrito por el usuario
   */
  private _onSubmit(): void {
    const data: number[] = [];
    for (let index = 0; index < this.getEventsListScheduled$.length; index++) {
      data.push(this.getEventsListScheduled$[index].idEvent!);
    }
    this._callService(data);
  }

  public delEvent(item: any): void {
    const eventsListScheduled = this.getEventsListScheduled$.filter(
      (data: IEvents) => data.idEvent != item.idEvent
    );
    this._statusService.setEventsListScheduled(eventsListScheduled);
    this._eventSelected = null!;
    this._onSubmit();
  }

  private _callService(listScheduled: number[]): void {
    this._statusService.spinnerShow();
    this._eventsService
      .putUserEvent(
        this._statusService.getGeneralStatus().userId,
        listScheduled
      )
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
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
}
