import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { SportsService } from "./sports.service";
import { environment } from "src/environments/environment";

describe("SportsService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SportsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(SportsService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("GetAll SportsService", () => {
    service.getAll().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.sports;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
