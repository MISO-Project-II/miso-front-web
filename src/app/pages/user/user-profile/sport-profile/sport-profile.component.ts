import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResSports, ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
import {
  IResUserSportProfile,
  IUserSportProfile,
} from "src/models/profile/sport-profile.interface";
import { SportsService } from "src/services/general/sports.service";
import { StatusService } from "src/services/local/status.service";
import { SportProfileService } from "src/services/profile/sport-profile.service";

@Component({
  selector: "app-sport-profile",
  templateUrl: "./sport-profile.component.html",
  styleUrls: ["./sport-profile.component.scss"],
})
export class SportProfileComponent implements OnInit, OnDestroy {
  public formUserSportProfile: FormGroup;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  public listSportPractice: ISports[] = [];
  public listSportInterest: ISports[] = [];
  public sportsServiceGetAll: IResSports;
  constructor(
    private _statusService: StatusService,
    private _sportProfileService: SportProfileService,
    private _sportsService: SportsService
  ) {}

  ngOnInit() {
    this._initForm();
    // this._loadData();
    this._sportsServiceGetAll$.subscribe((data: IResSports) => {
      this.sportsServiceGetAll = data;
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  private _initForm(): void {
    this.formUserSportProfile = new FormGroup({
      sportPractice: new FormControl("", [Validators.required]),
      sportInterest: new FormControl("", [Validators.required]),
      practice_hours: new FormControl("", [Validators.required]),
      disabilities: new FormControl("", [Validators.required]),
      pains: new FormControl("", [Validators.required]),
      sports_history: new FormControl("", [Validators.required]),
    });
  }
  get f() {
    return this.formUserSportProfile.controls;
  }
  get sportPractice() {
    return this.formUserSportProfile.get("sportPractice");
  }
  get sportInterest() {
    return this.formUserSportProfile.get("sportInterest");
  }
  get practice_hours() {
    return this.formUserSportProfile.get("practice_hours");
  }
  get disabilities() {
    return this.formUserSportProfile.get("disabilities");
  }
  get pains() {
    return this.formUserSportProfile.get("pains");
  }
  get sports_history() {
    return this.formUserSportProfile.get("sports_history");
  }
  get _sportsServiceGetAll$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  private _loadData(): void {
    this._statusService.spinnerShow();
    this._sportProfileService
      .get(this.getGeneralStatus.userId)
      .subscribe({
        next: (res: IResUserSportProfile) => {
          console.log("XXX - SportProfileComponent - _loadData - res", res);
          if (res.success) {
            this.formUserSportProfile.get("id")?.patchValue(res.response?.id);
            this.formUserSportProfile
              .get("sportPractice")
              ?.patchValue(res.response?.sport_practice);
            this.formUserSportProfile
              .get("sportInterest")
              ?.patchValue(res.response?.sport_interest);
            this.formUserSportProfile
              .get("practice_hours")
              ?.patchValue(res.response?.practice_hours);
            this.formUserSportProfile
              .get("disabilities")
              ?.patchValue(res.response?.disabilities);
            this.formUserSportProfile
              .get("pains")
              ?.patchValue(res.response?.pains);
            this.formUserSportProfile
              .get("sports_history")
              ?.patchValue(res.response?.sports_history);
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      })
      .unsubscribe();
  }

  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: IUserSportProfile = {
      sport_practice: this.sportPractice?.value,
      sport_interest: this.sportInterest?.value,
      practice_hours: this.practice_hours?.value,
      disabilities: this.disabilities?.value,
      pains: this.pains?.value,
      sports_history: this.sports_history?.value,
    };
    this._callService(data);
  }
  private _callService(data: IUserSportProfile): void {
    this._sportProfileService
      .update(this.getGeneralStatus.userId, data)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res: IResUserSportProfile) => {
          if (res.success) {
            this._loadData();
          }
          setTimeout(() => {
            this._statusService.spinnerHide();
          }, 500);
        },
        error: (e) => {
          console.error(e);
          this._statusService.spinnerHide();
        },
      });
  }
  public addSportPractice(item: any): void {
    this.listSportPractice.push(item);
    this.listSportPractice = [...new Set(this.listSportPractice)];
    this.formUserSportProfile
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public delSportPractice(item: any): void {
    this.listSportPractice = this.listSportPractice.filter(
      (data) => data.idsports != item.idsports
    );
    this.formUserSportProfile
      .get("sportPractice")
      ?.patchValue(this.listSportPractice);
  }
  public addSportInterest(item: any): void {
    this.listSportInterest.push(item);
    this.listSportInterest = [...new Set(this.listSportInterest)];
    this.formUserSportProfile
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
  public delSportInterest(item: any): void {
    this.listSportInterest = this.listSportInterest.filter(
      (data) => data.idsports != item.idsports
    );
    this.formUserSportProfile
      .get("sportInterest")
      ?.patchValue(this.listSportInterest);
  }
}
