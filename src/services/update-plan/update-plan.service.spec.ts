/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { UpdatePlanService } from "./update-plan.service";
import { environment } from "src/environments/environment";

describe("Service: UpdatePlan", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: UpdatePlanService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UpdatePlanService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(UpdatePlanService);
  });

  it("should ...", inject([UpdatePlanService], (service: UpdatePlanService) => {
    expect(service).toBeTruthy();
  }));
  it("GET updateContract", () => {
    service.updateContract(1, { idPlan: '1', idUser: 1, transaction: "" }).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + "/payment/{{iUser}}/purchase-plan/plan-name";
    url = url.replace("{{iUser}}", 1 + "") + "/" + '1'
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
});
