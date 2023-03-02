import { environment } from "src/environments/environment";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private _version: string;
  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService
  ) {
    this._translateService.setDefaultLang("es");
    const lang = sessionStorage.getItem("lang") || "es";
    this._translateService.use(lang);
    document.documentElement.lang = lang;
    this._version = environment.version;
  }
  ngOnInit() {
    console.log("XXX - Entra a AppComponent");
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
  ngOnDestroy(): void {
    console.log("XXX - Sale de AppComponent");
  }
  get getVersion() {
    return this._version;
  }
  get getIsMobile() {
    return this._statusService.getIsMobile() ? "APP" : "WEB";
  }
}
