/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { FoodRoutinesService } from "./food-routines.service";

xdescribe("Service: FoodRoutines", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodRoutinesService],
    });
  });

  it("should ...", inject(
    [FoodRoutinesService],
    (service: FoodRoutinesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
