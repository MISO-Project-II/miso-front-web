import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResSports, ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { SportsService } from "src/services/general/sports.service";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.scss"],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public sportsList: ISports[] = [];
  constructor(
    private _statusService: StatusService,
    private _sportsService: SportsService
  ) {}

  ngOnInit() {
    console.log("XXX - UserProfileComponent (Contiene el perfil del usuario)");
    this._loadSports();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getSportsService$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  private _loadSports(): void {
    this.getSportsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResSports) => {
        if (!!res && res.success) {
          this._statusService.setSportsList(res.result!);
          console.log("XXX - UserProfileComponent - _loadSports - res", res);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
}
