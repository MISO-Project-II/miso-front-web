import { environment } from "src/environments/environment";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, OnDestroy {
  private _version: string;
  constructor(private _translateService: TranslateService) {
    this._translateService.setDefaultLang("es");
    const lang = sessionStorage.getItem("lang") || "es";
    this._translateService.use(lang);
    document.documentElement.lang = lang;
    this._version = environment.version;
  }
  ngOnInit() {
    console.log("XXX - Entra a AppComponent");
  }
  ngOnDestroy(): void {
    console.log("XXX - Sale de AppComponent");
  }
  get getVersion() {
    return this._version;
  }
}
