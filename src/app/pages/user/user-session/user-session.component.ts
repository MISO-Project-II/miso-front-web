import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IResTrainingRoutines } from "src/models/routines/training-routines.interface";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { StatusService } from "src/services/local/status.service";
import { TrainingRoutinesService } from "src/services/routines/training-routines.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-user-session",
  templateUrl: "./user-session.component.html",
  styleUrls: ["./user-session.component.scss"],
})
export class UserSessionComponent implements OnInit {
  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService,
    private _trainingRoutinesService: TrainingRoutinesService
  ) {}

  ngOnInit() {
    console.log("XXX - UserSessionComponent");
  }

  get userData$(): Observable<IResUserData> {
    return this._userDataService.get(this._statusService.getUserId());
  }
  get trainingRoutines$(): Observable<IResTrainingRoutines> {
    return this._trainingRoutinesService.getAll(
      this._statusService.getUserId()
    );
  }
}
