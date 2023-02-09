import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { LoginService } from './login.service';
import { ILogin, IResLogin } from 'src/models/login/login.interface';
import { MockLogin, MockResSuccessLogin } from 'src/test/login/login.mock';
import { environment } from 'src/environments/environment';

describe('FastLoginService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(LoginService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('LoginService', () => {
    const transfer: ILogin = MockLogin;
    service
      .login(transfer)
      .subscribe((data) => expect(data).toBeTruthy());

    const url = environment.api.login;
    const req = httpMock.expectOne(url);
    expect(req.request.method).toBe('POST');
    req.flush({});
  });
});