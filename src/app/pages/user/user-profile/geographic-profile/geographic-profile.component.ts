import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-geographic-profile",
  templateUrl: "./geographic-profile.component.html",
  styleUrls: ["./geographic-profile.component.scss"],
})
export class GeographicProfileComponent implements OnInit {
  formUserGeographicProfile: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formUserGeographicProfile = this.fb.group({
      born_country: [null],
      born_city: [null],
      residence_country: [null],
      residence_city: [null],
      residence_time: [null],
      age: [null],
      height: [null],
      weight: [null],
      imc: [null],
    });
    console.log("XXX - GeographicProfileComponent");
  }

  onSubmit() {}
}
