/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { FoodPlansService } from "./food-plans.service";

describe("Service: FoodPlans", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: FoodPlansService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodPlansService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(FoodPlansService);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it("should ...", inject([FoodPlansService], (service: FoodPlansService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getFoodPlans", () => {
    service.getFoodPlans().subscribe((data) => expect(data).toBeTruthy());
    const url = "https://miso-back-food-6equtupdiq-uc.a.run.app/food-plan";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
