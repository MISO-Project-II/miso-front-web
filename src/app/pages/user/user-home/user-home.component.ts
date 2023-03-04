import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { ILocation } from "src/models/general/locantion.interface";
import { ISports } from "src/models/general/sports.interface";
import { IEvents } from "src/models/home/events.interface";
import { StatusModel } from "src/models/local/status-model";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private _statusService: StatusService,
    private _userDataService: UserDataService
  ) {}
  ngOnInit() {
    console.log("XXX - UserHomeComponent");
    this._loadGeneralData();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsList(): IEvents[] {
    return this._statusService.getEventsList();
  }
  get getSportsList(): ISports[] {
    return this._statusService.getSportsList();
  }
  get getLang() {
    return this._statusService.getLangLocation().lang;
  }
  get getLangName() {
    return this._statusService.getLangLocation().name;
  }
  get getLocation() {
    return this._statusService.getLangLocation().location;
  }
  get getBirthdUbication() {
    return this._statusService.getBirthdUbication();
  }
  get getHomeUbication() {
    return this._statusService.getHomeUbication();
  }
  get getAge() {
    return this._statusService.getGeneralStatus().age;
  }
  get getCurrency() {
    return this._statusService?.getHomeUbication()?.currency;
  }
  get getLangLocation() {
    return (
      this._statusService?.getLangLocation()?.lang +
      "-" +
      this._statusService?.getLangLocation()?.location
    );
  }

  private _loadGeneralData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (res.success) {
            console.log("🚀 XXX - UserHomeComponent - _loadData - res : ", res);
            this._statusService.setName(res.result?.name!);
            this._statusService.setLastName(res.result?.lastName!);
            this._statusService.setIdIdentificationType(
              res.result?.idIdentificationType!
            );
            this._statusService.setIdentificationNumber(
              res.result?.identificationNumber!
            );
            this._statusService.setBirthdUbication(
              // res.result?.birthdUbication!
              "CO-CUN-12312-COP"
            );
            this._statusService.setHomeUbication(
              // res.result?.homeUbication!
              "CO-CUN-12312-COP-10"
            );
            this._statusService.setGender(res.result?.gender!);
            this._statusService.setWeight(res.result?.weight!);
            this._statusService.setAge(res.result?.age!);
            this._statusService.setHeight(res.result?.height!);
            this._statusService.setIMC(res.result?.imc!);
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
