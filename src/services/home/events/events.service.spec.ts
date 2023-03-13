/* tslint:disable:no-unused-variable */

import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { EventsService } from "./events.service";
import { environment } from "src/environments/environment";

describe("Service: Events", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: EventsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EventsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(EventsService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should ...", inject([EventsService], (service: EventsService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getEvents", () => {
    service.getEvents().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.events;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getEvent", () => {
    service.getEvent(1).subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.events + '/1';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserEventSportsman", () => {
    service.getUserEventSportsman(8).subscribe((data) => expect(data).toBeTruthy());
    let baseUrl =
      environment.api.base +
      environment.api.user_event +
      environment.api.user_event_consume;
    const url = baseUrl.replace("{{id}}", 8 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserEventThird", () => {
    let baseUrl =
      environment.api.base +
      environment.api.user_event +
      environment.api.user_event_created;
    service.getUserEventThird(1).subscribe((data) => expect(data).toBeTruthy());
    const url = baseUrl.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("PUT putUserEvent", () => {
    service.putUserEvent(1, []).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.user_event;
    url = url.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("PUT");
    req.flush({});
  });
  it("POST postCreateEvent", () => {
    service.postCreateEvent({
      city: "",
      contractType: "",
      date: "",
      description: "",
      idSport: 1,
      idUserCreator: 1,
      name: ""
    }).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.events;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("POST");
    req.flush({});
  });
  it("DEL delEvent", () => {
    service.delEvent(1).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.events + "/1";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("DELETE");
    req.flush({});
  });
});
