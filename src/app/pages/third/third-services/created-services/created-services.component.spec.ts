/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CreatedServicesComponent } from "./created-services.component";

xdescribe("CreatedServicesComponent", () => {
  let component: CreatedServicesComponent;
  let fixture: ComponentFixture<CreatedServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
