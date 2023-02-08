import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-actual-products",
  templateUrl: "./actual-products.component.html",
  styleUrls: ["./actual-products.component.scss"],
})
export class ActualProductsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("XXX - ActualProductsComponent");
  }
}
