import { Component, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResServices, IServices } from "src/models/home/services.interface";
import {
  IResUserData,
  IUserData,
} from "src/models/user-data/user-data.interface";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-search-services",
  templateUrl: "./search-services.component.html",
  styleUrls: ["./search-services.component.scss"],
})
export class SearchServicesComponent implements OnInit {
  private _serviceSelected: IServices;
  private _userData: IUserData;
  private _listServices: IServices[] = [];
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _servicesService: ServicesService,
    private _userDataService: UserDataService,
    private _statusService: StatusService
  ) {}

  ngOnInit(): void {
    this._loadData();
  }

  get serviceGetAll$(): Observable<IResServices> {
    return this._servicesService.getAll();
  }
  get getService$(): IServices {
    return this._serviceSelected;
  }
  public setService(eventSelected: IServices) {
    this._serviceSelected = eventSelected;
  }

  private _loadData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .get(this._statusService.getUserId())
      .subscribe({
        next: (res: IResUserData) => {
          if (res.success) {
            this._listServices = res.response?.services!;
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
    data.services = this._listServices;
    this._callService(data);
  }

  public addEvent(item: any): void {
    this._listServices.push(item);
    this._listServices = [...new Set(this._listServices)];
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
              "XXX - SearchServicesComponent - _callService - res",
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
