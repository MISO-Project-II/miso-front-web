import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResServices } from "src/models/home/services.interface";
import { StatusModel } from "src/models/local/status-model";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-services",
  templateUrl: "./user-services.component.html",
  styleUrls: ["./user-services.component.scss"],
})
export class UserServicesComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public generalStatus: StatusModel;
  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit() {
    console.log("XXX - UserServicesComponent");
    this._loadGeneralStatus();
    this._loadServices();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  get getServicesService$(): Observable<IResServices> {
    return this._servicesService.getServices();
  }
  private _loadServices(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (res.success) {
          this._statusService.setServicesList(res.result!);
          console.log(
            "XXX - UserDashboardComponent - _loadServices - res",
            res
          );
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  private _loadGeneralStatus(): void {
    this.getGeneralStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
