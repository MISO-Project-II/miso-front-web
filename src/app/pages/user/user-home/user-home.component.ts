import { Component, OnInit } from "@angular/core";
import { ISports } from "src/models/general/sports.interface";
import { IEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit {
  constructor(private _statusService: StatusService) {}
  ngOnInit() {
    console.log("XXX - UserHomeComponent");
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsList(): IEvents[] {
    return this._statusService.getEventsList();
  }
  get getSportsList(): ISports[] {
    return this._statusService.getSportsList();
  }
}
