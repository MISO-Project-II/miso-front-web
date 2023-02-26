/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CreateServicesComponent } from "./create-services.component";

xdescribe("ConfigurationComponent", () => {
  let component: CreateServicesComponent;
  let fixture: ComponentFixture<CreateServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
