import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { ThirdDataService } from "./third-data.service";

describe("ThirdDataService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: ThirdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThirdDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(ThirdDataService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
