import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-search-events",
  templateUrl: "./search-events.component.html",
  styleUrls: ["./search-events.component.scss"],
})
export class SearchEventsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - SearchEventsComponent");
  }
}
