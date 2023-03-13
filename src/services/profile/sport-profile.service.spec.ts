import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { MockSportProfile } from "src/test/profile/sport-profile.mock";
import { SportProfileService } from "./sport-profile.service";

describe("SportProfileService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SportProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SportProfileService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(SportProfileService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("GET getImpediments", () => {
    service.getImpediments().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + '/impediments';
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getSportsByUser", () => {
    service.getSportsByUser(8).subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + `/users/8/sport`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getImpedimentsByUser", () => {
    service.getImpedimentsByUser(8).subscribe((data) => expect(data).toBeTruthy());
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/8/impediment/created`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("PUT putSportsByUser", () => {
    service.putSportsByUser(8, []).subscribe((data) => expect(data).toBeTruthy());
    const url = `${environment.api.base}/users/${8}/sport`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("PUT");
    req.flush({});
  });
  it("POST postImpedimentsByUser", () => {
    service.postImpedimentsByUser(8, []).subscribe((data) => expect(data).toBeTruthy());
    const url = `https://miso-user-6equtupdiq-uc.a.run.app/${8}/impediment`;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("POST");
    req.flush({});
  });
});
