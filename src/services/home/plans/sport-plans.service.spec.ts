/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { SportPlansService } from "./sport-plans.service";

describe("Service: SportPlans", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SportPlansService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SportPlansService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(SportPlansService);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it("should ...", inject([SportPlansService], (service: SportPlansService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getSportPlan", () => {
    service.getSportPlan().subscribe((data) => expect(data).toBeTruthy());
    const url = "https://miso-back-sportplan-6equtupdiq-uc.a.run.app/sport-plan";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
