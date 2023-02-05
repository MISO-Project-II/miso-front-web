/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsEventsService } from "./suggestions-events.service";

xdescribe("Service: SuggestionsEvents", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsEventsService],
    });
  });

  it("should ...", inject(
    [SuggestionsEventsService],
    (service: SuggestionsEventsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
