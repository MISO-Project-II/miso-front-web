import { timeout } from "rxjs";
import { ILangLocation } from "./../../models/local/languaje.interface";
import { ISportPlans } from "./../../models/home/sport-plans.interface";
import { IServices } from "src/models/home/services.interface";
import { IEvents } from "src/models/home/events.interface";
import { Injectable } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { FREE_CONTRACT, SPORTSMAN, THIRD } from "src/constanst/data.constants";
import { ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { IProducts } from "src/models/home/products.interface";
import { IRoutes } from "src/models/general/routes.interface";
import { IFoodPlans } from "src/models/home/food-plans.interface";
import { ILocation } from "src/models/general/locantion.interface";
import { IUser } from "src/models/login/login.interface";
import {
  ISetSession,
  ValueSession,
} from "src/models/general/session.interface";

@Injectable()
export class StatusService {
  private _status: StatusModel;
  private _userData: IUser;
  private _sportsList: ISports[] = [];
  private _eventsList: IEvents[] = [];
  private _eventsListScheduled: IEvents[] = [];
  private _servicesList: IServices[] = [];
  private _servicesListScheduled: IServices[] = [];
  private _productsList: IProducts[] = [];
  private _productsListScheduled: IProducts[] = [];
  private _routesList: IRoutes[] = [];
  private _foodPlans: IFoodPlans[] = [];
  private _sportPlans: ISportPlans[] = [];
  private _birthdUbicationData: ILocation;
  private _homeUbicationData: ILocation;
  private _isMobile: boolean = false;
  private _langLocation: ILangLocation;
  private _valueSession: ValueSession[] = [];
  private _lastSession: ISetSession;
  constructor(private _spinner: NgxSpinnerService) {
    this._status = new StatusModel(SPORTSMAN);
    this._status.contractType = FREE_CONTRACT;
    this._langLocation = {
      lang: "es",
      name: "Español",
      location: "CO",
    };
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
    sessionStorage.setItem("status", JSON.stringify(this._status));
  }
  public setUserId(userId: number) {
    this._status.userId = userId;
    sessionStorage.setItem("status", JSON.stringify(this._status));
    sessionStorage.setItem("userId", JSON.stringify(userId));
  }
  public setToken(token: string) {
    this._status.token = token;
    sessionStorage.setItem("status", JSON.stringify(this._status));
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  public setUserData(userData: IUser) {
    this._userData = userData;
    sessionStorage.setItem("userData", JSON.stringify(userData));
  }
  public setUserName(userName: string) {
    this._status.username = userName;
    sessionStorage.setItem("status", JSON.stringify(this._status));
  }
  public setContractType(contractType: string) {
    this._status.contractType = contractType;
    console.log(
      "🚀 XXX - StatusService - setContractType -  this._status : ",
      this._status
    );
    sessionStorage.setItem("status", JSON.stringify(this._status));
  }
  public setName(name: string) {
    this._status.name = name;
  }
  public setLastName(lastName: string) {
    this._status.lastName = lastName;
  }
  public setIdIdentificationType(idIdentificationType: string) {
    this._status.idIdentificationType = idIdentificationType;
  }
  public setIdentificationNumber(identificationNumber: string) {
    this._status.identificationNumber = identificationNumber;
  }
  public setBirthdUbication(birthdUbication: string) {
    this._status.birthdUbication = birthdUbication;
    this._birthdUbicationData = {
      country: birthdUbication.split("-")[0],
      state: birthdUbication.split("-")[1],
      city: parseInt(birthdUbication.split("-")[2]),
      currency: birthdUbication.split("-")[3],
    };
  }
  public setHomeUbication(homeUbication: string) {
    this._status.homeUbication = homeUbication;
    this._homeUbicationData = {
      country: homeUbication.split("-")[0],
      state: homeUbication.split("-")[1],
      city: parseInt(homeUbication.split("-")[2]),
      currency: homeUbication.split("-")[3],
      monthsOfResidence: parseInt(homeUbication.split("-")[4]),
    };
  }
  public setGender(gender: string) {
    this._status.gender = gender;
  }
  public setWeight(weight: number) {
    this._status.weight = weight;
  }
  public setAge(age: Date) {
    this._status.age = age;
  }
  public setHeight(height: number) {
    this._status.height = height;
  }
  public setIMC(imc: number) {
    this._status.imc = imc;
  }

  public setSportsList(sportsList: ISports[]) {
    sessionStorage.setItem("sportsList", JSON.stringify(sportsList));
    this._sportsList = sportsList;
  }
  public setEventsList(eventsList: IEvents[]) {
    sessionStorage.setItem("eventsList", JSON.stringify(eventsList));
    this._eventsList = eventsList;
  }
  public setEventsListScheduled(eventsListScheduled: IEvents[]) {
    const newEventsListScheduled = new Set(eventsListScheduled);
    this._eventsListScheduled = [...newEventsListScheduled];
  }
  public setServicesList(servicesList: IServices[]) {
    sessionStorage.setItem("servicesList", JSON.stringify(servicesList));
    this._servicesList = servicesList;
  }
  public setProductsListScheduled(productsListScheduled: IProducts[]) {
    const newProductsListScheduled = new Set(productsListScheduled);
    this._productsListScheduled = [...newProductsListScheduled];
  }
  public setProductsList(productsList: IProducts[]) {
    sessionStorage.setItem("productsList", JSON.stringify(productsList));
    this._productsList = productsList;
  }
  public setServicesListScheduled(servicesListScheduled: IServices[]) {
    const newServicesListScheduled = new Set(servicesListScheduled);
    this._servicesListScheduled = [...newServicesListScheduled];
  }
  public setRoutesList(routesList: IRoutes[]) {
    this._routesList = routesList;
  }
  public setIsMobile(isMobile: boolean) {
    this._isMobile = isMobile;
  }
  public setFoodPlansList(foodPlans: IFoodPlans[]) {
    this._foodPlans = foodPlans;
  }
  public setSportPlansList(sportPlans: ISportPlans[]) {
    this._sportPlans = sportPlans;
  }
  public setLangLocation(langLocation: ILangLocation) {
    this._langLocation = langLocation;
  }
  public setLang(lang: string) {
    this._langLocation.lang = lang;
  }
  public setLangName(name: string) {
    this._langLocation.name = name;
  }
  public setLocation(location: string) {
    this._langLocation.location = location;
  }
  public setSessionData(valueSession: ValueSession) {
    this._valueSession.push(valueSession);
    console.log(
      "🚀 XXX - StatusService - setSessionData - this._valueSession1 : ",
      this._valueSession
    );
    setTimeout(() => {
      const newValueSession = new Set(this._valueSession);
      this._valueSession = [...newValueSession];
      console.log(
        "🚀 XXX - StatusService - setSessionData - this._valueSession2 : ",
        this._valueSession
      );
    }, 100);
  }
  public setLastSessionData(lastSession: ISetSession) {
    this._lastSession = lastSession;
  }
  public clearSetSessionData() {
    this._valueSession = [];
  }
  public getGeneralStatus(): StatusModel {
    // return this._status;
    const status: StatusModel = JSON.parse(sessionStorage.getItem("status")!);
    status.userId = this.getUserId();
    status.token = this.getToken();
    this._userData = this.getUser();
    status.username = this._userData.username;
    return status;
  }
  public getSportsList(): ISports[] {
    // return this._sportsList;
    return JSON.parse(sessionStorage.getItem("sportsList")!);
  }
  public getEventsList(): IEvents[] {
    // return this._eventsList;
    return JSON.parse(sessionStorage.getItem("eventsList")!);
  }
  public getEventsListScheduled(): IEvents[] {
    return this._eventsListScheduled;
  }
  public getServicesList(): IServices[] {
    // return this._servicesList;
    return JSON.parse(sessionStorage.getItem("servicesList")!);
  }
  public getServicesListScheduled(): IServices[] {
    return this._servicesListScheduled;
  }
  public getProductsList(): IProducts[] {
    // return this._productsList;
    return JSON.parse(sessionStorage.getItem("productsList")!);
  }
  public getProductsListScheduled(): IProducts[] {
    return this._productsListScheduled;
  }
  public getRoutesList(): IRoutes[] {
    return this._routesList;
  }
  public getIsMobile(): boolean {
    return this._isMobile;
  }
  public getFoodPlansList(): IFoodPlans[] {
    return this._foodPlans;
  }
  public getSportPlansList(): ISportPlans[] {
    return this._sportPlans;
  }
  public getLangLocation(): ILangLocation {
    return this._langLocation;
  }
  public getBirthdUbication(): ILocation {
    return this._birthdUbicationData;
  }
  public getHomeUbication(): ILocation {
    return this._homeUbicationData;
  }
  public getToken(): string {
    return JSON.parse(sessionStorage.getItem("token")!);
  }
  public getUserId(): number {
    return JSON.parse(sessionStorage.getItem("userId")!);
  }
  public getUser(): IUser {
    return JSON.parse(sessionStorage.getItem("userData")!);
  }
  public getSessionData(): ValueSession[] {
    return this._valueSession;
  }
  public getLastSessionData(): ISetSession {
    return this._lastSession;
  }
  public spinnerShow(timeout?: number) {
    setTimeout(
      () => {
        this._spinner.show();
      },
      timeout ? timeout : 10
    );
  }
  public spinnerHide() {
    setTimeout(() => {
      this._spinner.hide();
    }, 500);
  }
}
