/* tslint:disable:no-unused-variable */

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject } from "@angular/core/testing";
import { RoutesService } from "./routes.service";

describe("Service: Routes", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: RoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RoutesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(RoutesService);
  });

  it("should ...", inject([RoutesService], (service: RoutesService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getRoutes", () => {
    service.getRoutes().subscribe((data) => expect(data).toBeTruthy());
    const url = "https://miso-back-path-6equtupdiq-uc.a.run.app/paths";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
