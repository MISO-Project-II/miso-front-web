/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { UpdatePlanService } from "./update-plan.service";

xdescribe("Service: UpdatePlan", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdatePlanService],
    });
  });

  it("should ...", inject([UpdatePlanService], (service: UpdatePlanService) => {
    expect(service).toBeTruthy();
  }));
});
