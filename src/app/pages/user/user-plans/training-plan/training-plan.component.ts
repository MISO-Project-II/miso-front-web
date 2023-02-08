import { ITrainingRoutines } from "src/models/routines/training-routines.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-training-plan",
  templateUrl: "./training-plan.component.html",
  styleUrls: ["./training-plan.component.scss"],
})
export class TrainingPlanComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    console.log("XXX - UserSessionComponent");
  }
}
