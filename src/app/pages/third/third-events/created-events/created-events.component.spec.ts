/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CreatedEventsComponent } from "./created-events.component";

xdescribe("ConfigurationComponent", () => {
  let component: CreatedEventsComponent;
  let fixture: ComponentFixture<CreatedEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreatedEventsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
