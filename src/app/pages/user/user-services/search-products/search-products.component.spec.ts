/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { SearchProductsComponent } from "./search-products.component";

xdescribe("ConfigurationComponent", () => {
  let component: SearchProductsComponent;
  let fixture: ComponentFixture<SearchProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProductsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
