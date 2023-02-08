/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { CountryStateCityService } from "./country-state-city.service";

xdescribe("Service: CountryStateCity", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryStateCityService],
    });
  });

  it("should ...", inject(
    [CountryStateCityService],
    (service: CountryStateCityService) => {
      expect(service).toBeTruthy();
    }
  ));
});
