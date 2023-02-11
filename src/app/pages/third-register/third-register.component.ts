import { ROOT_ROUTES_NAMES } from "../../app.routing";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { THIRD } from "src/constanst/data.constats";
import { ROUTES_NAMES } from "src/constanst/routes";
import { StatusModel } from "src/models/local/status-model";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-third-register",
  templateUrl: "./third-register.component.html",
  styleUrls: ["./third-register.component.scss"],
})
export class ThirdRegisterComponent implements OnInit {
  public formThirdRegister: FormGroup;

  constructor(private _router: Router, private _statusService: StatusService) {}

  ngOnInit() {
    this._statusService.setUserType(THIRD);
    this._initForm();
  }
  get getGeneralStatus(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  private _initForm(): void {
    this.formThirdRegister = new FormGroup({
      // Datos principales
      thirdName: new FormControl("", [Validators.required]),
      thirdPass: new FormControl("", [Validators.required]),
      thirdPassConfirmation: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      identificationType: new FormControl("", [Validators.required]),
      number: new FormControl("", [Validators.required]),
      // Datos deportivos
      sportPractice: new FormControl("", [Validators.required]),
      sportInteres: new FormControl("", [Validators.required]),
      // Datos secundarios
      genre: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
      height: new FormControl("", [Validators.required]),
      // Datos de ubicacion
      countryBirth: new FormControl("", [Validators.required]),
      cityBirth: new FormControl("", [Validators.required]),
      countryResidence: new FormControl("", [Validators.required]),
      cityResidence: new FormControl("", [Validators.required]),
      yearsResidence: new FormControl("", [Validators.required]),
    });
  }
  public onSubmit(): void {
    this._router.navigate([this.getGeneralStatus.userUrl + ROUTES_NAMES.HOME]);
  }
}
