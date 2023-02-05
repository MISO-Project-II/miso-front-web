/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { AllergiesService } from "./allergies.service";

xdescribe("Service: Allergies", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllergiesService],
    });
  });

  it("should ...", inject([AllergiesService], (service: AllergiesService) => {
    expect(service).toBeTruthy();
  }));
});
