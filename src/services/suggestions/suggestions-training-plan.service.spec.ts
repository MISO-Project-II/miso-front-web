/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsTrainingPlanService } from "./suggestions-training-plan.service";

describe("Service: SuggestionsTrainingPlan", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsTrainingPlanService],
    });
  });

  it("should ...", inject(
    [SuggestionsTrainingPlanService],
    (service: SuggestionsTrainingPlanService) => {
      expect(service).toBeTruthy();
    }
  ));
});
