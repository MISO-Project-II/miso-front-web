import { Component, OnInit } from "@angular/core";
import { T } from "@fullcalendar/core/internal-common";
import { TranslateService } from "@ngx-translate/core";
import { environment } from "src/environments/environment";
import { ValueSession } from "src/models/general/session.interface";
import { StatusService } from "src/services/local/status.service";
import * as XLSX from "xlsx";
@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"],
})
export class ConfigurationComponent implements OnInit {
  public lang: string = "es";
  private _version: string;
  public selectedFile: any;

  public file: File;
  public arrayBuffer: any;

  constructor(
    private _statusService: StatusService,
    private _translateService: TranslateService
  ) {
    this.lang = sessionStorage.getItem("lang") || "es";
    this._version = environment.version;
  }

  ngOnInit(): void {
    this.lang;
  }
  public changeLang(value: string): void {
    sessionStorage.setItem("lang", value);
    this._translateService.use(this.getLang);
    window.location.reload();
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
  get getSessionData$(): ValueSession[] {
    return this._statusService.getSessionData();
  }
  public loadFile(event: any): void {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i)
        arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      var arraylist: Array<T> = XLSX.utils.sheet_to_json(worksheet, {
        raw: true,
      });
      var valueSession: ValueSession[] = this._mapArrayList(arraylist);
      this._statusService.setSessionData(valueSession[0]);
      console.log(
        "🚀 XXX - ConfigurationComponent - valueSession : ",
        valueSession
      );
    };
  }
  public delFiles(): void {
    this._statusService.clearSetSessionData();
  }

  private _mapArrayList(arraylist: Array<T>): ValueSession[] {
    return arraylist.map((data: any) => {
      return {
        value: data.value,
        label: data.label,
        append: data.append,
        min: data.min,
        max: data.max,
      };
    });
  }
}
