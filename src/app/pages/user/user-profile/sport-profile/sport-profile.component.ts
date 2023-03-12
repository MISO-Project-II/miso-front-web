import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable, Subject, takeUntil } from "rxjs";
import { IResSports, ISports } from "src/models/general/sports.interface";
import { StatusModel } from "src/models/local/status-model";
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
  public sportPracticeList: ISports[] | null = [];
  public sportPreferenceList: ISports[] | null = [];
  public disabilitiesList?: any[] = []; // IDisabilities
  public userDisabilitiesList?: any[] = []; // IDisabilities
  public painList?: any[] = []; // IPains
  public userPainList?: any[] = []; // IPains
  public userAllegiesList?: any[] = [];
  constructor(
    private _statusService: StatusService,
    private _sportProfileService: SportProfileService,
    private _sportsService: SportsService
  ) {}

  ngOnInit() {
    this._initForm();
    this._loadData();
    this._sportsServiceGetAll$.pipe(takeUntil(this._destroy$)).subscribe({
      next: (data: IResSports) => {
        if (data && data.success && data.result && data.result.length > 0) {
          this.sportPracticeList = data.result.filter(
            (s) => s.sportType == "SPORTS_PRACTICE"
          );
          this.sportPreferenceList = data.result.filter(
            (s) => s.sportType == "SPORTS_INTEREST"
          );
        }
      },
      error: () => {},
    });
    this._sportsServiceGetImpediments$
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (data) => {
          if (data.success && data.result && data.result.length > 0) {
            this.disabilitiesList = data.result.filter(
              (r: any) => r.impedimentType == "INJURY"
            );
            this.painList = data.result.filter(
              (r: any) => r.impedimentType == "INCONVENIENCE"
            );
          }
        },
        error: () => {},
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
  get _sportsServiceGetImpediments$(): Observable<any> {
    return this._sportProfileService.getImpediments();
  }
  private _loadData(): void {
    this._sportProfileService
      .getSportsByUser(this.getGeneralStatus.userId)
      .subscribe({
        next: (response) => {
          if (response.success && response.result) {
            this.listSportPractice = response.result["sports-practices"] || [];
            this.sportPractice?.patchValue(this.listSportPractice);
            this.listSportInterest = response.result["sports-interest"] || [];
            this.sportInterest?.patchValue(this.listSportInterest);
          }
        },
      });
    this._sportProfileService
      .getImpedimentsByUser(this.getGeneralStatus.userId)
      .subscribe({
        next: (response) => {
          if (
            response.success &&
            response.result &&
            response.result.impediments
          ) {
            this.userDisabilitiesList =
              response.result.impediments["INJURY"] || [];
            this.disabilities?.patchValue(this.userDisabilitiesList);
            this.userPainList =
              response.result.impediments["INCONVENIENCE"] || [];
            this.pains?.patchValue(this.userPainList);
            this.userAllegiesList =
              response.result.impediments["ALLERGY"] || [];
          }
        },
        error: () => {},
      });
  }

  public addSportPractice(item: ISports): void {
    if (!this.listSportPractice.find((s) => s.idsports == item.idsports)) {
      this.listSportPractice.push(item);
    }
    this.sportPractice?.patchValue(this.listSportPractice);
  }
  public delSportPractice(item: ISports): void {
    this.listSportPractice = this.listSportPractice.filter(
      (data) => data.idsports != item.idsports
    );
    this.sportPractice?.patchValue(this.listSportPractice);
  }
  public addSportInterest(item: any): void {
    if (!this.listSportInterest.find((s) => s.idsports == item.idsports)) {
      this.listSportInterest.push(item);
    }
    this.sportInterest?.patchValue(this.listSportInterest);
  }
  public delSportInterest(item: any): void {
    this.listSportInterest = this.listSportInterest.filter(
      (data) => data.idsports != item.idsports
    );
    this.sportInterest?.patchValue(this.listSportInterest);
  }
  public addUserDisability(item: any): void {
    if (
      !this.userDisabilitiesList?.find(
        (d) => d.IdImpediment == item.IdImpediment
      )
    ) {
      this.userDisabilitiesList?.push(item);
      this.userDisabilitiesList = [...new Set(this.userDisabilitiesList)];
    }
    this.disabilities?.patchValue(this.userDisabilitiesList);
  }
  public delUserDisability(item: any): void {
    this.userDisabilitiesList = this.userDisabilitiesList?.filter(
      (data: any) => data.IdImpediment != item.IdImpediment
    );
    this.disabilities?.patchValue(this.userDisabilitiesList);
  }
  public addUserPain(item: any): void {
    if (!this.userPainList?.find((p) => p.IdImpediment == item.IdImpediment)) {
      this.userPainList?.push(item);
      this.userPainList = [...new Set(this.userPainList)];
    }
    this.pains?.patchValue(this.userPainList);
  }
  public delUserPain(item: any): void {
    this.userPainList = this.userPainList?.filter(
      (data: any) => data.IdImpediment != item.IdImpediment
    );
    this.pains?.patchValue(this.userPainList);
  }

  public onSubmitSportProfile(): void {
    let listSports = ((this.sportPractice?.value as ISports[]) || []).map(
      (s) => s.idsports
    );
    listSports = listSports.concat(
      ((this.sportInterest?.value as ISports[]) || []).map((s) => s.idsports)
    );
    let listImpediments = ((this.disabilities?.value as any[]) || []).map(
      (s) => s.IdImpediment
    );
    listImpediments = listImpediments.concat(
      ((this.pains?.value as any[]) || []).map((s) => s.IdImpediment)
    );
    listImpediments = listImpediments.concat(
      (this.userAllegiesList || []).map((s) => s.IdImpediment)
    );
    this._callService(listSports, listImpediments);
  }
  private _callService(listSports: number[], listImpediments: number[]): void {
    this._statusService.spinnerShow();
    this._sportProfileService
      .putSportsByUser(this.getGeneralStatus.userId, listSports)
      .subscribe({
        next: () => {
          // XXX Validar rta
          this._statusService.spinnerHide();
        },
      });
    this._sportProfileService
      .postImpedimentsByUser(this.getGeneralStatus.userId, listImpediments)
      .subscribe({
        next: () => {
          this._statusService.spinnerHide();
        },
      });
  }
}
