import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { UbicationService } from "./ubication.service";

describe("UbicationService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: UbicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UbicationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(UbicationService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
  it("GET getCountries", () => {
    let countries = service.getCountries();
    expect(countries).toBeTruthy();
  });
  it("GET getCountry", () => {
    let country = service.getCountry('CO');
    expect(country).toBeTruthy();
  });
  it("GET getStatesByCountry", () => {
    let states = service.getStatesByCountry('CO');
    expect(states).toBeTruthy();
  });
  it("GET getCitiesBtStateByCountry", () => {
    let cities = service.getCitiesBtStateByCountry('CO', 'BOY');
    expect(cities).toBeTruthy();
  });
  it("GET getCitiesByCountry", () => {
    let cities = service.getCitiesByCountry('CO');
    expect(cities).toBeTruthy();
  });
});
