/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from "@angular/core/testing";
import { UserRegisterService } from "./user-register.service";

xdescribe("Service: UserRegister", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRegisterService],
    });
  });

  it("should ...", inject(
    [UserRegisterService],
    (service: UserRegisterService) => {
      expect(service).toBeTruthy();
    }
  ));
});
