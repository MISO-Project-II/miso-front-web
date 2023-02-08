import { Component, OnInit } from "@angular/core";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit {
  constructor(private _statusService: StatusService) {}
  ngOnInit() {
    console.log("XXX1 - getIsUser: " + this._statusService.getIsUser());
    console.log("XXX2 - getPlan: " + this._statusService.getPlan());
    console.log("XXX3 - getStatus: " + this._statusService.getStatus());
    console.log("XXX4 - getToken: " + this._statusService.getToken());
    console.log("XXX5 - getUrlUser: " + this._statusService.getUrlUser());
    console.log("XXX6 - getUserId: " + this._statusService.getUserId());
    console.log("XXX7 - getUserName: " + this._statusService.getUserName());

    console.log("XXX - UserHomeComponent");
  }
}
