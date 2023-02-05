/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { FoodPlansService } from "./food-plans.service";

xdescribe("Service: FoodPlans", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodPlansService],
    });
  });

  it("should ...", inject([FoodPlansService], (service: FoodPlansService) => {
    expect(service).toBeTruthy();
  }));
});
