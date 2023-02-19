import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-home",
  templateUrl: "./third-home.component.html",
  styleUrls: ["./third-home.component.scss"],
})
export class ThirdHomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log("XXX - ThirdHomeComponent");
    this._loadGeneralStatus();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
