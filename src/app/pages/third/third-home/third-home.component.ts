import { Component, OnInit } from "@angular/core";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-home",
  templateUrl: "./third-home.component.html",
  styleUrls: ["./third-home.component.scss"],
})
export class ThirdHomeComponent implements OnInit {
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log("XXX - ThirdHomeComponent");
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
