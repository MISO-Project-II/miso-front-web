/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { GeographicProfileComponent } from "./geographic-profile.component";

xdescribe("GeographicProfileComponent", () => {
  let component: GeographicProfileComponent;
  let fixture: ComponentFixture<GeographicProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeographicProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeographicProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
