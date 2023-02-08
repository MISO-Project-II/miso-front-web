import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ds-banner-title",
  templateUrl: "./ds-banner-title.component.html",
  styleUrls: ["./ds-banner-title.component.scss"],
})
export class DsBannerTitleComponent implements OnInit {
  @Input() title: string = "";
  constructor() {}
  ngOnInit() {
    console.log("XXX - DsBannerTitleComponent");
  }
}
