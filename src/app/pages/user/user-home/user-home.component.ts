import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { ISports } from "src/models/general/sports.interface";
import { IEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  constructor(private _statusService: StatusService) {}
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  ngOnInit() {
    console.log("XXX - UserHomeComponent");
    this._loadGeneralStatus();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  get getEventsList$(): Observable<IEvents[]> {
    return this._statusService.getEventsList$();
  }
  get getSportsList$(): Observable<ISports[]> {
    return this._statusService.getSportsList$();
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
