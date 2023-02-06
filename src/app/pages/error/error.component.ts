import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit {
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
