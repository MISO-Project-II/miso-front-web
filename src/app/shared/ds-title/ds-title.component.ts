import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ds-title",
  templateUrl: "./ds-title.component.html",
  styleUrls: ["./ds-title.component.scss"],
})
export class DsTitleComponent implements OnInit {
  @Input() title: string = "";

  constructor() {}

  ngOnInit() {
    console.log("XXX - DsTitleComponent");
  }
}
