/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SportPlansService } from "./sport-plans.service";

describe("Service: SportPlans", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportPlansService],
    });
  });

  it("should ...", inject([SportPlansService], (service: SportPlansService) => {
    expect(service).toBeTruthy();
  }));
});
