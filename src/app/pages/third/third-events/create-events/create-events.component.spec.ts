/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { CreateEventsComponent } from "./create-events.component";

xdescribe("ConfigurationComponent", () => {
  let component: CreateEventsComponent;
  let fixture: ComponentFixture<CreateEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEventsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
