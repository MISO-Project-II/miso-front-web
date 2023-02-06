import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-see-routes",
  templateUrl: "./see-routes.component.html",
  styleUrls: ["./see-routes.component.scss"],
})
export class SeeRoutesComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - SeeRoutesComponent");
  }
}
