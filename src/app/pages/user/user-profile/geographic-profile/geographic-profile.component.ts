import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-geographic-profile",
  templateUrl: "./geographic-profile.component.html",
  styleUrls: ["./geographic-profile.component.scss"],
})
export class GeographicProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log("XXX - GeographicProfileComponent");
  }
}
