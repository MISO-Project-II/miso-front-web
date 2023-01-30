import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FREE_PLAN } from "src/constanst/data.constats";
import { StatusModel } from "src/models/local/status-model";

@Injectable()
export class StatusService {
  private _status: StatusModel;
  private _userId: number;
  private _token: string = "";
  private _userName: string = "";
  private _plan: string = "";
  constructor(
    private _spinner: NgxSpinnerService,
    private _translateService: TranslateService
  ) {
    this._status = new StatusModel(true);
    this._plan = FREE_PLAN;
  }
  public setStatus(status: StatusModel) {
    this._status = status;
  }
  public setIsUser(isUser: boolean) {
    this._status.isUser = isUser;
  }
  public setUserId(userId: number) {
    this._userId = userId;
  }
  public setToken(token: string) {
    this._token = token;
  }
  public setUserName(userName: string) {
    this._userName = userName;
  }
  public setPlan(plan: string) {
    this._plan = plan;
  }
  public getStatus() {
    return this._status;
  }
  public getIsUser() {
    return this._status.isUser;
  }
  public getUrlUser() {
    return this._status.isUser ? "usuario/" : "tercero/";
  }
  public getUserId() {
    return this._userId;
  }
  public getToken() {
    return this._token;
  }
  public getUserName() {
    return this._userName;
  }
  public getPlan() {
    return this._plan;
  }
  public spinnerShow() {
    this._spinner.show();
  }
  public spinnerHide() {
    this._spinner.hide();
  }
}
