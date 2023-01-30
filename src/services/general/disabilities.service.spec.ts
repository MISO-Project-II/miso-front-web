/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { DisabilitiesService } from "./disabilities.service";

describe("Service: Disabilities", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisabilitiesService],
    });
  });

  it("should ...", inject(
    [DisabilitiesService],
    (service: DisabilitiesService) => {
      expect(service).toBeTruthy();
    }
  ));
});
