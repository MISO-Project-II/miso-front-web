import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { UserDataService } from "./user-data.service";
import { IUserData } from "src/models/user-data/user-data.interface";
import { MockUserData } from "src/test/user-data/user-data.mock";

describe("UserDataService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: UserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDataService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(UserDataService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("Get UserDataService", () => {
    const userId: number = 1;
    service
      .getGeneralData(userId)
      .subscribe((data) => expect(data).toBeTruthy());
    const url =
      environment.api.base + environment.api.general_data + "/" + userId;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("Put UserDataService", () => {
    const mock: IUserData = MockUserData;
    const userId: number = 1;
    service
      .updateGeneralData(userId, mock)
      .subscribe((data) => expect(data).toBeTruthy());
    const url =
      environment.api.base + environment.api.general_data + "/" + userId;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("PUT");
    req.flush({});
  });
  it("GET getGeneralDataThird", () => {
    const userId: number = 1;
    service
      .getGeneralDataThird()
      .subscribe((data) => expect(data).toBeTruthy());
    const url =
    environment.api.base + environment.api.general_data + "/thirds";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
