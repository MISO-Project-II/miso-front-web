/* tslint:disable:no-unused-variable */
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { ProductsService } from "./products.service";
import { environment } from "src/environments/environment";

describe("Service: Products", () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it("should ...", inject([ProductsService], (service: ProductsService) => {
    expect(service).toBeTruthy();
  }));
  it("GET getProducts", () => {
    service.getProducts().subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.products;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getProduct", () => {
    service.getProduct(1).subscribe((data) => expect(data).toBeTruthy());
    const url = environment.api.base + environment.api.products + "/1";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserProductSportsman", () => {
    service.getUserProductSportsman(1).subscribe((data) => expect(data).toBeTruthy());
    let baseUrl =
      environment.api.base +
      environment.api.user_product +
      environment.api.user_product_consume;
    const url = baseUrl.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("GET getUserProductThird", () => {
    service.getUserProductThird(1).subscribe((data) => expect(data).toBeTruthy());
    let baseUrl =
      environment.api.base +
      environment.api.user_product +
      environment.api.user_product_created;
    const url = baseUrl.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("GET");
    req.flush({});
  });
  it("PUT putUserProduct", () => {
    service.putUserProduct(1, []).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.user_product;
    url = url.replace("{{id}}", 1 + "");
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("PUT");
    req.flush({});
  });
  it("POST postCreateProduct", () => {
    service.postCreateProduct({
      contractType: "",
      description: "",
      eventType: "",
      idSport: 1,
      idUserCreator: 1,
      name: ""
    }).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.products;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("POST");
    req.flush({});
  });
  it("DEL delProduct", () => {
    service.delProduct(1).subscribe((data) => expect(data).toBeTruthy());
    let url = environment.api.base + environment.api.products + "/1";
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe("DELETE");
    req.flush({});
  });
});
