/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SeeRoutesComponent } from "./see-routes.component";

describe("ConfigurationComponent", () => {
  let component: SeeRoutesComponent;
  let fixture: ComponentFixture<SeeRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeeRoutesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
