import { ROOT_ROUTES_NAMES } from "../../app.routing";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { THIRD } from "src/constanst/data.constants";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-login",
  templateUrl: "./third-login.component.html",
  styleUrls: ["./third-login.component.scss"],
})
export class ThirdLoginComponent implements OnInit {
  public formThirdLogin: FormGroup;
  public ROUTES_NAMES = ROUTES_NAMES;
  public ROOT_ROUTES_NAMES = ROOT_ROUTES_NAMES;
  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this._statusService.setUserType(THIRD);
    this._initForm();
    localStorage.clear();
    sessionStorage.clear();
  }
  private _initForm(): void {
    this.formThirdLogin = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      userPass: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.THIRD]);
  }
  public goUserRegister(): void {
    this._router.navigate([ROOT_ROUTES_NAMES.THIRD_REGISTER]);
  }
}
