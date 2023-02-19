import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import {
  INSIDE_OF_HOUSE,
  OUTSIDE_OF_HOUSE,
} from "src/constanst/data.constants";
import { IResServices, IServices } from "src/models/home/services.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-actual-services",
  templateUrl: "./actual-services.component.html",
  styleUrls: ["./actual-services.component.scss"],
})
export class ActualServicesComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  private _serviceselected: IServices = null!;
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _statusService: StatusService,
    private _servicesService: ServicesService
  ) {}

  ngOnInit(): void {
    console.log("XXX - ActualServicesComponent - ngOnInit - ngOnInit");
    // this._loadServicesScheduled();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  get getService$(): IServices {
    return this._serviceselected;
  }
  public setEvent(serviceselected: IServices) {
    this._serviceselected = serviceselected;
  }
  // get getServicesService$(): Observable<IResServices> {
  //   return this._servicesService.getServicesByUser(
  //     this._statusService.getGeneralStatus().userId
  //   );
  // }
  get getServicesListScheduled(): IServices[] {
    return this._statusService.getServicesListScheduled();
  }
  // private _loadServicesScheduled(): void {
  //   this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
  //     (res: IResServices) => {
  //       if (res.success) {
  //         this._statusService.setServicesListScheduled(res.result!);
  //         console.log(
  //           "XXX - ScheduledServicesComponent - _loadServicesScheduled - res",
  //           res
  //         );
  //       }
  //     },
  //     (err) => {
  //       console.error(err);
  //     }
  //   );
  // }
  /**
   * Cancelar evento inscrito por el usuario
   */
  private _onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IServices = this.getServicesListScheduled[0];
    // this._callService(data);
  }

  public delEvent(item: any): void {
    const servicesListScheduled = this.getServicesListScheduled.filter(
      (data) => data.id != item.id
    );
    this._statusService.setServicesListScheduled(servicesListScheduled);
    this._serviceselected = null!;
    this._onSubmit();
  }

  // private _callService(data: IServices): void {
  //   this._servicesService
  //     .updateServicesByUser(this._statusService.getGeneralStatus().userId, data)
  //     .subscribe((res: IResServices) => {
  //       if (res.success) {
  //         console.log(
  //           "XXX - ScheduledServicesComponent - _callService - res",
  //           res
  //         );
  //       }
  //       this._statusService.spinnerHide();
  //     });
  // }
}
