/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { PainsService } from "./pains.service";

xdescribe("Service: Pains", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PainsService],
    });
  });

  it("should ...", inject([PainsService], (service: PainsService) => {
    expect(service).toBeTruthy();
  }));
});
