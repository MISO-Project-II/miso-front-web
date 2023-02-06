import { Component, OnDestroy, OnInit } from "@angular/core";
@Component({
  selector: "app-food-profile",
  templateUrl: "./food-profile.component.html",
  styleUrls: ["./food-profile.component.scss"],
})
export class FoodProfileComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - FoodProfileComponent");
  }
}
