import { TestBed } from "@angular/core/testing";
import { LoginService } from "./login.service";

xdescribe("LoginService", () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  describe("method1", () => {
    it("should ...", () => {
      expect(service).toBeTruthy();
    });
  });
});

/* tslint:disable:no-unused-variable */

// import { TestBed, async, inject } from "@angular/core/testing";
// import { LoginService } from "./login.service";

// xdescribe("Service: Login", () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [LoginService],
//     });
//   });

//   it("should ...", inject([LoginService], (service: LoginService) => {
//     expect(service).toBeTruthy();
//   }));
// });
