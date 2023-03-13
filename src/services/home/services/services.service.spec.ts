/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ServicesService } from "./services.service";
import { environment } from "src/environments/environment";

describe("Service: Services", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: ServicesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicesService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(ServicesService);
  });

  it("should ...", inject([ServicesService], (service: ServicesService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getServices", () => {
    service.getServices().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.services;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getService", () => {
    service.getService(1).subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.services + "/1";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserServiceSportsman", () => {
    service.getUserServiceSportsman(8).subscribe((data) => expect(data).toBeTruthy());
    let baseUrl =
      environment.api.base +
      environment.api.user_service +
      environment.api.user_service_consume;
    const url = baseUrl.replace("{{id}}", 8 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserServiceThird", () => {
    service.getUserServiceThird(1).subscribe((data) => expect(data).toBeTruthy());
    let baseUrl =
      environment.api.base +
      environment.api.user_service +
      environment.api.user_service_created;
    const url = baseUrl.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("PUT putUserService", () => {
    service.putUserService(1, []).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.user_service;
    url = url.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("PUT");
    req.flush({});
  });
  it("POST postCreateService", () => {
    service.postCreateService({
      contractType: "",
      description: "",
      eventType: "",
      idSport: 1,
      idUserCreator: 1,
      name: "",
      price: 0
    }).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.services;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("POST");
    req.flush({});
  });
  it("DEL delService", () => {
    service.delService(1).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.services + "/1";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("DELETE");
    req.flush({});
  });
});
