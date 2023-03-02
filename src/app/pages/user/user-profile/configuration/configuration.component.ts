import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"],
})
export class ConfigurationComponent implements OnInit {
  public lang: string = "es";
  private _version: string;
  constructor(private _statusService: StatusService) {
    this.lang = localStorage.getItem("lang") || "es";
    this._version = environment.version;
  }

  ngOnInit(): void {
    this.lang;
  }

  public changeLang(value: string): void {
    localStorage.setItem("lang", value);
    window.location.reload();
  }
  get getVersion() {
    return this._version;
  }
  get getIsMobile() {
    return this._statusService.getIsMobile() ? "APP" : "WEB";
  }
}
