/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ActualServicesComponent } from "./actual-services.component";

xdescribe("ConfigurationComponent", () => {
  let component: ActualServicesComponent;
  let fixture: ComponentFixture<ActualServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
