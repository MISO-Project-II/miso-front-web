/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { ThirdDataService } from "./third-data.service";

xdescribe("Service: ThirdData", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdDataService],
    });
  });

  it("should ...", inject([ThirdDataService], (service: ThirdDataService) => {
    expect(service).toBeTruthy();
  }));
});
