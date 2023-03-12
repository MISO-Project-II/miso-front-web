import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public sportsList: ISports[] = [];
  constructor(private _statusService: StatusService) {}

  ngOnInit() {
    console.log(
      "🚀 XXX - UserProfileComponent (Contiene el perfil del usuario)"
    );
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
}
