import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-user-session",
  templateUrl: "./user-session.component.html",
  styleUrls: ["./user-session.component.scss"],
})
export class UserSessionComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
  }
}
