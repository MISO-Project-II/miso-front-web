import { Component, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { INSIDE_OF_HOUSE, OUTSIDE_OF_HOUSE } from "src/constanst/data.constats";
import { IEvents } from "src/models/home/events.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-scheduled-events",
  templateUrl: "./scheduled-events.component.html",
  styleUrls: ["./scheduled-events.component.scss"],
})
export class ScheduledEventsComponent implements OnInit {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _eventSelected: IEvents = null!;
  private _userData: IUserData;
  private _listEvents: IEvents[] = [];
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    this._loadData();
  }

  get userDataGet$(): Observable<IResUserData> {
    return this._userDataService.get(this._statusService.getUserId());
  }

  get getEvent$(): IEvents {
    return this._eventSelected;
  }
  public setEvent(eventSelected: IEvents) {
    this._eventSelected = eventSelected;
  }

  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            this._listEvents = res.response?.events!;
            this._userData = res?.response!;
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      })
      .unsubscribe();
  }
  private _onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserData = this._userData;
    data.events = this._listEvents;
    this._callService(data);
  }

  public delEvent(item: any): void {
    this._listEvents = this._listEvents.filter((data) => data.id != item.id);
    this._eventSelected = null!;
    this._onSubmit();
  }

  private _callService(data: IUserData): void {
    this._userDataService
      .update(this._statusService.getUserId(), data)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            console.log(
              "XXX - ScheduledEventsComponent - _callService - res",
              res
            );
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      });
  }
}
