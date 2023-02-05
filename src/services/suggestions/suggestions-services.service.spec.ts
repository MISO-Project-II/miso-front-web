/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsServicesService } from "./suggestions-services.service";

xdescribe("Service: SuggestionsServices", () => {
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
