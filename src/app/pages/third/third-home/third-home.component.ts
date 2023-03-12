import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResSports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { SportsService } from "src/services/general/sports.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-third-home",
  templateUrl: "./third-home.component.html",
  styleUrls: ["./third-home.component.scss"],
})
export class ThirdHomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService,
    private _sportsService: SportsService
  ) {}

  ngOnInit() {
    this._loadGeneralData();
    this._loadSports();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getUserId() {
    return this._statusService?.getGeneralStatus().userId;
  }
  get getToken() {
    return this._statusService?.getGeneralStatus().token;
  }
  get getUserName() {
    return this._statusService?.getGeneralStatus().username;
  }
  get getUser() {
    return this._statusService?.getUser();
  }
  get getSportsService$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  private _loadGeneralData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - ThirdHomeComponent - _loadGeneralData - res : ",
              res
            );
            this._statusService.setUserId(this.getUserId);
            this._statusService.setToken(this.getToken);
            this._statusService.setUserName(this.getUserName);
            this._statusService.setUserData(this.getUser);

            this._statusService.setName(res.result?.name!);
            this._statusService.setLastName(res.result?.lastName!);
            this._statusService.setIdIdentificationType(
              res.result?.idIdentificationType!
            );
            this._statusService.setIdentificationNumber(
              res.result?.identificationNumber!
            );
            this._statusService.setBirthdUbication(
              res.result?.birthdUbication!
              // "CO-CUN-12312-COP"
            );
            this._statusService.setHomeUbication(
              res.result?.homeUbication!
              // "CO-CUN-12312-COP-10"
            );
            this._statusService.setGender(res.result?.gender!);
            this._statusService.setWeight(res.result?.weight!);
            this._statusService.setAge(res.result?.age!);
            this._statusService.setHeight(res.result?.height!);
            this._statusService.setIMC(res.result?.imc!);
            this._statusService.setContractType(res.result?.userPlan!);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private _loadSports(): void {
    this._statusService.spinnerShow();
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
