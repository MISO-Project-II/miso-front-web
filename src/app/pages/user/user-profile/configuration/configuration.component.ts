import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-configuration",
  templateUrl: "./configuration.component.html",
  styleUrls: ["./configuration.component.scss"],
})
export class ConfigurationComponent implements OnInit {
  public lang: string = "es";
  constructor() {
    this.lang = localStorage.getItem("lang") || "es";
  }

  ngOnInit(): void {
    this.lang;
  }

  public changeLang(value: string): void {
    localStorage.setItem("lang", value);
    window.location.reload();
  }
}
