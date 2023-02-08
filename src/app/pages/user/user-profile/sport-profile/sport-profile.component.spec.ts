/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SportProfileComponent } from "./sport-profile.component";

xdescribe("SportProfileComponent", () => {
  let component: SportProfileComponent;
  let fixture: ComponentFixture<SportProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SportProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
