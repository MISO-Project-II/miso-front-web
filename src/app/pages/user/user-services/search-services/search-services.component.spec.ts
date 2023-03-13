/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SearchServicesComponent } from "./search-services.component";

xdescribe("SearchServicesComponent", () => {
  let component: SearchServicesComponent;
  let fixture: ComponentFixture<SearchServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchServicesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
