import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ds-title",
  templateUrl: "./ds-title.component.html",
  styleUrls: ["./ds-title.component.scss"],
})
export class DsTitleComponent {
  @Input() title: string = "";
}
