/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { IntolerancesService } from "./intolerances.service";

describe("Service: Intolerances", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntolerancesService],
    });
  });

  it("should ...", inject(
    [IntolerancesService],
    (service: IntolerancesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
