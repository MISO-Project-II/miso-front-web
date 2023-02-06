import { Component, OnDestroy, OnInit } from "@angular/core";
@Component({
  selector: "app-sport-profile",
  templateUrl: "./sport-profile.component.html",
  styleUrls: ["./sport-profile.component.scss"],
})
export class SportProfileComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - SportProfileComponent");
  }
}
