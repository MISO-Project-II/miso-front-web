/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { FoodProfileComponent } from "./food-profile.component";

xdescribe("FoodProfileComponent", () => {
  let component: FoodProfileComponent;
  let fixture: ComponentFixture<FoodProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoodProfileComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
