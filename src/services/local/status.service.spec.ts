import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { getTestBed, TestBed } from "@angular/core/testing";
import { StatusService } from "./status.service";
import { TranslateService } from "@ngx-translate/core";

xdescribe("StatusService", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: StatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StatusService, TranslateService],
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
  it("void setBirthdUbication", () => {
    service.setBirthdUbication("CO-DC-149237-COP");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setHomeUbication", () => {
    service.setHomeUbication("CO-BOY-21553-COP-10");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setUserType SPORTSMAN", () => {
    service.setUserType("SPORTSMAN");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setUserType THIRD", () => {
    service.setUserType("THIRD");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setUserId", () => {
    service.setUserId(1);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setUserName", () => {
    service.setUserName("test");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setContractType", () => {
    service.setContractType("PREMIUM");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setName", () => {
    service.setName("test_name");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setLastName", () => {
    service.setLastName("test_last_name");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIdIdentificationType", () => {
    service.setIdIdentificationType("");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIdentificationNumber", () => {
    service.setIdentificationNumber("");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setGender", () => {
    service.setGender("F");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setWeight", () => {
    service.setWeight(50);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setAge", () => {
    service.setAge(new Date("1999-09-06"));
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setHeight", () => {
    service.setHeight(147);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIsVegan", () => {
    service.setIsVegan(0);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIsvegetarian", () => {
    service.setIsvegetarian(0);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIMC", () => {
    service.setIMC(20);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIdSportPlan", () => {
    service.setIdSportPlan(1);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIdFoodPlan", () => {
    service.setIdFoodPlan(1);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setDescription", () => {
    service.setDescription("");
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setSportsList", () => {
    service.setSportsList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setEventsList", () => {
    service.setEventsList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setEventsListScheduled", () => {
    service.setEventsListScheduled([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setServicesList", () => {
    service.setServicesList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setProductsListScheduled", () => {
    service.setProductsListScheduled([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setProductsList", () => {
    service.setProductsList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setServicesListScheduled", () => {
    service.setServicesListScheduled([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setRoutesList", () => {
    service.setRoutesList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setFoodPlansList", () => {
    service.setFoodPlansList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setSportPlansList", () => {
    service.setSportPlansList([]);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  it("void setIsMobile", () => {
    service.setIsMobile(false);
    expect(sessionStorage.getItem('status')).toBeTruthy();
  });
  // it("void getGeneralStatus", () => {
  //   let data = service.getGeneralStatus() || true;
  //   expect(data).toBeTruthy();
  // });
  it("void getSportsList", () => {
    let data = service.getSportsList();
    expect(data).toBeTruthy();
  });
  it("void getEventsList", () => {
    let data = service.getEventsList();
    expect(data).toBeTruthy();
  });
  it("void getEventsListScheduled", () => {
    let data = service.getEventsListScheduled();
    expect(data).toBeTruthy();
  });
  it("void getServicesList", () => {
    let data = service.getServicesList() || [];
    expect(data).toBeTruthy();
  });
  it("void getServicesListScheduled", () => {
    let data = service.getServicesListScheduled();
    expect(data).toBeTruthy();
  });
  it("void getProductsList", () => {
    let data = service.getProductsList() || [];
    expect(data).toBeTruthy();
  });
  it("void getProductsListScheduled", () => {
    let data = service.getProductsListScheduled() || [];
    expect(data).toBeTruthy();
  });
  it("void getRoutesList", () => {
    let data = service.getRoutesList();
    expect(data).toBeTruthy();
  });
  it("void getIsMobile", () => {
    let data = service.getIsMobile();
    expect(data != null).toBeTruthy();
  });
  it("void getFoodPlansList", () => {
    let data = service.getFoodPlansList();
    expect(data).toBeTruthy();
  });
  it("void getSportPlansList", () => {
    let data = service.getSportPlansList();
    expect(data).toBeTruthy();
  });
  it("void getLangLocation", () => {
    let data = service.getLangLocation();
    expect(data).toBeTruthy();
  });
  it("void getBirthdUbication", () => {
    let data = service.getBirthdUbication() || true;
    expect(data).toBeTruthy();
  });
  it("void getHomeUbication", () => {
    let data = service.getHomeUbication() || true;
    expect(data).toBeTruthy();
  });
  it("void getToken", () => {
    let data = service.getToken() || true;
    expect(data).toBeTruthy();
  });
  it("void getUserId", () => {
    let data = service.getUserId() || true;
    expect(data).toBeTruthy();
  });
  it("void getUser", () => {
    let data = service.getUser() || true;
    expect(data).toBeTruthy();
  });
  it("void getSessionData", () => {
    let data = service.getSessionData();
    expect(data).toBeTruthy();
  });
  it("void getLastSessionData", () => {
    let data = service.getLastSessionData() || true;
    expect(data).toBeTruthy();
  });
  it("void getThirdList", () => {
    let data = service.getThirdList() || [];
    expect(data).toBeTruthy();
  });
  it("void spinnerShow", () => {
    service.spinnerShow();
    expect(true).toBeTruthy();
  });
  it("void getThirdList", () => {
    service.spinnerHide();
    expect(true).toBeTruthy();
  });
});
