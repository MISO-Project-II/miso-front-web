/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsFoodPlansService } from "./suggestions-food-plans.service";

describe("Service: SuggestionsFoodPlans", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsFoodPlansService],
    });
  });

  it("should ...", inject(
    [SuggestionsFoodPlansService],
    (service: SuggestionsFoodPlansService) => {
      expect(service).toBeTruthy();
    }
  ));
});
