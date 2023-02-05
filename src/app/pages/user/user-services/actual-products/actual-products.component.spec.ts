/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { DebugElement } from "@angular/core";

import { ActualProductsComponent } from "./actual-products.component";

xdescribe("ConfigurationComponent", () => {
  let component: ActualProductsComponent;
  let fixture: ComponentFixture<ActualProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActualProductsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
