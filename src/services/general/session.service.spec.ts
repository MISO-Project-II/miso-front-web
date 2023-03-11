import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { SessionService } from "./session.service";
import { environment } from "src/environments/environment";

xdescribe("SessionService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SessionService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(SessionService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("GetAll SessionService", () => {
    service.getSession().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.session;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
