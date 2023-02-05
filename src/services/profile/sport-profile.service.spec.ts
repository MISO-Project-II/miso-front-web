/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SportProfileService } from "./sport-profile.service";

xdescribe("Service: SportProfile", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportProfileService],
    });
  });

  it("should ...", inject(
    [SportProfileService],
    (service: SportProfileService) => {
      expect(service).toBeTruthy();
    }
  ));
});
