import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { FoodProfileService } from "./food-profile.service";

describe("FoodProfileService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: FoodProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FoodProfileService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(FoodProfileService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
