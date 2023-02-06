import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-food-plan",
  templateUrl: "./food-plan.component.html",
  styleUrls: ["./food-plan.component.scss"],
})
export class FoodPlanComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - FoodPlanComponent");
  }
}
