/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { ThirdRegisterService } from "./third-register.service";

describe("Service: ThirdRegister", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThirdRegisterService],
    });
  });

  it("should ...", inject(
    [ThirdRegisterService],
    (service: ThirdRegisterService) => {
      expect(service).toBeTruthy();
    }
  ));
});
