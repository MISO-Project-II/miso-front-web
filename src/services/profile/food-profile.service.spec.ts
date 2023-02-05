/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { FoodProfileService } from "./food-profile.service";

xdescribe("Service: FoodProfile", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodProfileService],
    });
  });

  it("should ...", inject(
    [FoodProfileService],
    (service: FoodProfileService) => {
      expect(service).toBeTruthy();
    }
  ));
});
