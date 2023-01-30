import { Component, OnInit } from "@angular/core";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-home",
  templateUrl: "./third-home.component.html",
  styleUrls: ["./third-home.component.scss"],
})
export class ThirdHomeComponent implements OnInit {
  public isUser: boolean;
  constructor(private _statusService: StatusService) {}

  ngOnInit(): void {
    this.isUser = this._statusService.getIsUser();
  }
}
