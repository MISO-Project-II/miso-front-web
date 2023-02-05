/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { SuggestionsRoutesService } from "./suggestions-routes.service";

xdescribe("Service: SuggestionsRoutes", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuggestionsRoutesService],
    });
  });

  it("should ...", inject(
    [SuggestionsRoutesService],
    (service: SuggestionsRoutesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
