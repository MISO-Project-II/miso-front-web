import { Component, OnInit } from "@angular/core";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-dashboard",
  templateUrl: "./third-dashboard.component.html",
  styleUrls: ["./third-dashboard.component.scss"],
})
export class ThirdDashboardComponent implements OnInit {
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    this._statusService.setIsUser(false);
  }
}
