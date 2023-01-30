/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DemographicProfileService } from "./demographic-profile.service";

describe("Service: DemographicProfile", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemographicProfileService],
    });
  });

  it("should ...", inject(
    [DemographicProfileService],
    (service: DemographicProfileService) => {
      expect(service).toBeTruthy();
    }
  ));
});
