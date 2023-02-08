import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-actual-services",
  templateUrl: "./actual-services.component.html",
  styleUrls: ["./actual-services.component.scss"],
})
export class ActualServicesComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - ActualServicesComponent");
  }
}
