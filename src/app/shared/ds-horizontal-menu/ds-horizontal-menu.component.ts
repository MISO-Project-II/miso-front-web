import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject, takeUntil } from "rxjs";
import { ROOT_ROUTES_NAMES } from "src/app/app.routing";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-ds-horizontal-menu",
  templateUrl: "./ds-horizontal-menu.component.html",
  styleUrls: ["./ds-horizontal-menu.component.scss"],
})
export class DsHorizontalMenuComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() userName: string = "";
  @Input() contractType: string = "";
  public userType: string;
  public generalStatus: StatusModel;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this._loadGeneralStatus();
    this.userType = this.generalStatus.userUrl.substring(
      0,
      this.generalStatus.userUrl.length - 1
    );
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get generalStatus$(): Observable<StatusModel> {
    return this._statusService.getGeneralStatus$();
  }
  public goProfile(): void {
    this._router.navigate([this.generalStatus.userUrl + ROUTES_NAMES.PROFILE]);
  }
  private _loadGeneralStatus(): void {
    this.generalStatus$
      .pipe(takeUntil(this._destroy$))
      .subscribe((data: StatusModel) => (this.generalStatus = data));
  }
}
