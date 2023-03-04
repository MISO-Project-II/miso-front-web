/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SportPlanComponent } from "./sport-plan.component";

xdescribe("SportPlanComponent", () => {
  let component: SportPlanComponent;
  let fixture: ComponentFixture<SportPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SportPlanComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
