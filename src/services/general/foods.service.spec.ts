/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { FoodsService } from "./foods.service";

describe("Service: Foods", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodsService],
    });
  });

  it("should ...", inject([FoodsService], (service: FoodsService) => {
    expect(service).toBeTruthy();
  }));
});
