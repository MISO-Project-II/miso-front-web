import { ROOT_ROUTES_NAMES } from "./../../app.routing";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";
import { LoginService } from "src/services/login/login.service";
import { ILogin, IResLogin } from "src/models/login/login.interface";

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"],
})
export class UserLoginComponent implements OnInit {
  public formUserLogin: FormGroup;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(
    private _router: Router,
    private _statusService: StatusService,
    private _loginService: LoginService
  ) {}

  ngOnInit() {
    this._statusService.setIsUser(true);
    this._initForm();
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
      authCode: new FormControl("1qaz2wsx3edc4rfv", [Validators.required]),
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
  get authCode() {
    return this.formUserLogin.get("authCode");
  }

  public goToUserRegister(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.USER_REGISTER]);
  }
  public onSubmit(): void {
    this._statusService.spinnerShow();
    const data: ILogin = {
      username: this.username?.value,
      password: this.password?.value,
    };
    this._loginService.login(data).subscribe({
      next: (res: IResLogin) => {
        console.log(
          "XXX - UserServicesComponent - postLogin - res",
          JSON.stringify(res)
        );
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
}
