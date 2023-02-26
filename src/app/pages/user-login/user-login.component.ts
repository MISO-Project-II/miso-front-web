import { environment } from "src/environments/environment";
import { ROOT_ROUTES_NAMES } from "./../../app.routing";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";
import { LoginService } from "src/services/login/login.service";
import { ILogin, IResLogin } from "src/models/login/login.interface";
import { SPORTSMAN } from "src/constanst/data.constants";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  public formUserLogin: FormGroup;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  public version: string;
  constructor(
    private _router: Router,
    private _statusService: StatusService,
    private _loginService: LoginService
  ) {
    this.version = environment.version;
  }

  ngOnInit() {
    this._statusService.setUserType(SPORTSMAN);
    this._initForm();
    localStorage.clear();
    sessionStorage.clear();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formUserLogin = new FormGroup({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10),
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(100),
      ]),
    });
  }
  get form() {
    return this.formUserLogin.controls;
  }
  get username() {
    return this.formUserLogin.get("username");
  }
  get password() {
    return this.formUserLogin.get("password");
  }

  public goToUserRegister(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.USER_REGISTER]);
  }
  public goToThird(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.THIRD_LOGIN]);
  }
  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: ILogin = {
      username: this.username?.value,
      password: this.password?.value,
    };
    this._loginService
      .login(data)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResLogin) => {
          console.log("XXX - UserLoginComponent - .subscribe - res", res);
          if (res.success) {
            setTimeout(() => {
              this._statusService.setUserId(res.userId!);
              this._statusService.setToken(res.token!);
              this._statusService.setUserName(res.user?.username!);
              this._router.navigate([ROOT_ROUTES_NAMES.USER]);
            }, 1000);
          } else {
            this.username?.setErrors({ error_login: true });
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
