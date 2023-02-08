import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-scheduled-events",
  templateUrl: "./scheduled-events.component.html",
  styleUrls: ["./scheduled-events.component.scss"],
})
export class ScheduledEventsComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - ScheduledEventsComponent");
  }
}
