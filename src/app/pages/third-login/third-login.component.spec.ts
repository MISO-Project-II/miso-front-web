import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ThirdLoginComponent } from "./third-login.component";
import { StatusService } from "src/services/local/status.service";

xdescribe("ThirdLoginComponent", () => {
  let component: ThirdLoginComponent;
  let fixture: ComponentFixture<ThirdLoginComponent>;
  let _statusService: StatusService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdLoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: _statusService, useValue: {} }],
      imports: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    _statusService = TestBed.inject(StatusService);
  });

  describe("method1", () => {
    it("should ...", () => {
      expect(component).toBeTruthy();
    });
  });
});
