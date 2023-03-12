import { ROOT_ROUTES_NAMES } from "../../app.routing";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";
import { SPORTSMAN, THIRD } from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import { ILogin, IResLogin } from "src/models/login/login.interface";
import { StatusService } from "src/services/local/status.service";
import { LoginService } from "src/services/login/login.service";

@Component({
  selector: "app-third-login",
  templateUrl: "./third-login.component.html",
  styleUrls: ["./third-login.component.scss"],
})
export class ThirdLoginComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();

  public formThirdLogin: FormGroup;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(
    private _router: Router,
    private _statusService: StatusService,
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    this._statusService.setUserType(THIRD);
    this._initForm();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  private _initForm(): void {
    this.formThirdLogin = new FormGroup({
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
    return this.formThirdLogin.controls;
  }
  get username() {
    return this.formThirdLogin.get("username");
  }
  get password() {
    return this.formThirdLogin.get("password");
  }
  public goUserRegister(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.THIRD_REGISTER]);
  }
  public goToUser(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.USER_LOGIN]);
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
          console.log("🚀 XXX - ThirdLoginComponent - onSubmit - res : ", res);
          if (!!res && res.success) {
            setTimeout(() => {
              if (res.user?.userType === THIRD) {
                this._statusService.setUserId(res.userId!);
                this._statusService.setToken(res.token!);
                this._statusService.setUserName(res.user?.username!);
                this._statusService.setUserData(res.user!);
                this._router.navigate([ROOT_ROUTES_NAMES.THIRD]);
              }
              if (res.user?.userType === SPORTSMAN) {
                this._statusService.setUserId(res.userId!);
                this._statusService.setToken(res.token!);
                this._statusService.setUserName(res.user?.username!);
                this._statusService.setUserData(res.user!);
                this._router.navigate([ROOT_ROUTES_NAMES.USER]);
              }
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
