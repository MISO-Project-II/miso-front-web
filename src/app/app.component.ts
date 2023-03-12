import { UbicationService } from "src/services/general/ubication.service";
import { environment } from "src/environments/environment";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { StatusService } from "src/services/local/status.service";
import { ILangLocation } from "src/models/local/languaje.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private _version: string;
  private _langLocation: ILangLocation;
  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService
  ) {
    this._langLocation = {
      lang: "es",
      name: "Español",
      location: "CO",
    };
    this._statusService.setLangLocation(this._langLocation);

    this._translateService.setDefaultLang(this._langLocation.lang);
    const lang = sessionStorage.getItem("lang") || this._langLocation.lang;
    this._translateService.use(lang);
    document.documentElement.lang = lang;
    this._version = environment.version;
  }
  ngOnInit() {
    this._isMobile();
  }
  ngOnDestroy(): void {
    sessionStorage.removeItem("status");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userData");
    sessionStorage.removeItem("sportsList");
    sessionStorage.removeItem("eventsList");
    sessionStorage.removeItem("servicesList");
    sessionStorage.removeItem("productsList");
    sessionStorage.removeItem("thirdList");
    sessionStorage.removeItem("lastSession");
  }
  private _isMobile(): void {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          isMobile.Android() ||
          isMobile.BlackBerry() ||
          isMobile.iOS() ||
          isMobile.Opera() ||
          isMobile.Windows()
        );
      },
    };
    isMobile.any()
      ? this._statusService.setIsMobile(true)
      : this._statusService.setIsMobile(false);
  }
  get getVersion() {
    return this._version;
  }
  get getIsMobile() {
    return this._statusService.getIsMobile() ? "APP" : "WEB";
  }
  get getLang() {
    return this._statusService.getLangLocation().lang;
  }
  get getLangName() {
    return this._statusService.getLangLocation().name;
  }
  get getLocation() {
    return this._statusService.getLangLocation().location;
  }
}
