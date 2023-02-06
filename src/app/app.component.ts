import { environment } from "src/environments/environment";
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private _version: string;
  constructor(private _translateService: TranslateService) {
    this._translateService.setDefaultLang("es");
    const lang = localStorage.getItem("lang") || "es";
    this._translateService.use(lang);
    document.documentElement.lang = lang;
    this._version = environment.version;
  }
  get getVersion() {
    return this._version;
  }
}
