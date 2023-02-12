import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FREE_PLAN, SPORTSMAN, THIRD } from "src/constanst/data.constats";
import { ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";

@Injectable()
export class StatusService {
  private _status: StatusModel;
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
    this._status.sportsList = sportsList;
  }
  public getGeneralStatus(): StatusModel {
    return this._status;
  }
  public spinnerShow() {
    this._spinner.show();
  }
  public spinnerHide() {
    this._spinner.hide();
  }
}
