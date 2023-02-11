import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { StatusService } from "./status.service";

describe("StatusService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: StatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(StatusService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
