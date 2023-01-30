/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsServicesService } from "./suggestions-services.service";

describe("Service: SuggestionsServices", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsServicesService],
    });
  });

  it("should ...", inject(
    [SuggestionsServicesService],
    (service: SuggestionsServicesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
