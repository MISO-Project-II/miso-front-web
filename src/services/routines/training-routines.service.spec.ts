/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { TrainingRoutinesService } from "./training-routines.service";

describe("Service: TrainingRoutines", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingRoutinesService],
    });
  });

  it("should ...", inject(
    [TrainingRoutinesService],
    (service: TrainingRoutinesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
