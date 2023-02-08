import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-plans",
  templateUrl: "./user-plans.component.html",
  styleUrls: ["./user-plans.component.scss"],
})
export class UserPlansComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("XXX - UserPlansComponent");
  }
}
