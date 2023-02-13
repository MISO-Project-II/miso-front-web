import { IServices } from "src/models/home/services.interface";
import { IEvents } from "src/models/home/events.interface";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FREE_PLAN, SPORTSMAN, THIRD } from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";

@Injectable()
export class StatusService {
  private _status: StatusModel;
  private _sportsList: ISports[];
  private _eventsList: IEvents[];
  private _eventsListScheduled: IEvents[];
  private _servicesList: IServices[];
  private _servicesListScheduled: IServices[];
  constructor(private _spinner: NgxSpinnerService) {
    this._status = new StatusModel(SPORTSMAN);
    this._status.contractType = FREE_PLAN;
  }
  public setGeneralStatus(status: StatusModel) {
    this._status = status;
  }
  public setUserType(userType: string) {
    this._status.userType = userType;
    if (userType === SPORTSMAN) {
      this._status.userUrl = "usuario/";
    } else if (userType === THIRD) {
      this._status.userUrl = "tercero/";
    }
  }
  public setUserId(userId: number) {
    this._status.userId = userId;
  }
  public setToken(token: string) {
    this._status.token = token;
  }
  public setUserName(userName: string) {
    this._status.userName = userName;
  }
  public setContractType(contractType: string) {
    this._status.contractType = contractType;
  }
  public setSportsList(sportsList: ISports[]) {
    this._sportsList = sportsList;
  }
  public setEventsList(eventsList: IEvents[]) {
    this._eventsList = eventsList;
  }
  public setEventsListScheduled(eventsListScheduled: IEvents[]) {
    this._eventsListScheduled = eventsListScheduled;
  }
  public setServicesList(servicesList: IServices[]) {
    this._servicesList = servicesList;
  }
  public setServicesListScheduled(servicesListScheduled: IServices[]) {
    this._servicesListScheduled = servicesListScheduled;
  }
  public getGeneralStatus(): StatusModel {
    return this._status;
  }
  public getSportsList(): ISports[] {
    return this._sportsList;
  }
  public getEventsList(): IEvents[] {
    return this._eventsList;
  }
  public getEventsListScheduled(): IEvents[] {
    return this._eventsListScheduled;
  }
  public getServicesList(): IServices[] {
    return this._servicesList;
  }
  public getServicesListScheduled(): IServices[] {
    return this._servicesListScheduled;
  }
  public spinnerShow() {
    this._spinner.show();
  }
  public spinnerHide() {
    this._spinner.hide();
  }
}
