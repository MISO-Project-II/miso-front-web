import {
  IResThirdData,
  IThirdDataMap,
} from "./../../../../models/third-data/third-data.interface";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Observable, Subject, takeUntil } from "rxjs";
import { IRoutes } from "src/models/general/routes.interface";
import { IResSports, ISports } from "src/models/general/sports.interface";
import {
  IEvents,
  IResEvents,
  IResUserEvents,
} from "src/models/home/events.interface";
import {
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { IResProducts } from "src/models/home/products.interface";
import { IResServices, IServices } from "src/models/home/services.interface";
import {
  ISportPlans,
  SportRoutineList,
} from "src/models/home/sport-plans.interface";
import { StatusModel } from "src/models/local/status-model";
import { IThirdData } from "src/models/third-data/third-data.interface";
import { IResUserData } from "src/models/user-data/user-data.interface";
import { RoutesService } from "src/services/general/routes.service";
import { SportsService } from "src/services/general/sports.service";
import { EventsService } from "src/services/home/events/events.service";
import { FoodPlansService } from "src/services/home/plans/food-plans.service";
import { SportPlansService } from "src/services/home/plans/sport-plans.service";
import { ProductsService } from "src/services/home/products/products.service";
import { ServicesService } from "src/services/home/services/services.service";
import { StatusService } from "src/services/local/status.service";
import { UserDataService } from "src/services/user-data/user-data.service";
import {
  FREE_CONTRACT,
  INSIDE_OF_HOUSE,
  INTERMEDIATE_CONTRACT,
  OUTSIDE_OF_HOUSE,
  PREMIUM_CONTRACT,
} from "src/constanst/data.constants";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  public INSIDE_OF_HOUSE: string = INSIDE_OF_HOUSE;
  public OUTSIDE_OF_HOUSE: string = OUTSIDE_OF_HOUSE;
  public FREE_CONTRACT: string = FREE_CONTRACT;
  public INTERMEDIATE_CONTRACT: string = INTERMEDIATE_CONTRACT;
  public PREMIUM_CONTRACT: string = PREMIUM_CONTRACT;
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  eventSelected: any;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: "prev",
      center: "title",
      right: "next",
    },
    locale: "es",
    initialView: "dayGridMonth",
    plugins: [dayGridPlugin],
    events: [],
    eventColor: "#f85716",
    eventClick: (arg) => {
      this.eventSelected = arg.event;
      let btn = document.getElementById("btn-event-details");
      btn?.click();
    },
  };
  sportRoutinesRecommended: SportRoutineList[] = [];
  foodRoutinesRecommended: FoodRoutineList[] = [];
  routesRecommended: IRoutes[] = [];

  constructor(
    private _translateService: TranslateService,
    private _statusService: StatusService,
    private _userDataService: UserDataService,
    private _sportsService: SportsService,
    private _eventsService: EventsService,
    private _routesService: RoutesService,
    private _servicesService: ServicesService,
    private _productsService: ProductsService,
    private _sportPlansService: SportPlansService,
    private _foodPlansService: FoodPlansService,
    private router: Router
  ) {}
  ngOnInit() {
    this._loadGeneralData();
    this._loadSports();
    this._loadEvents();
    this._loadRoutes();
    this._loadServices();
    this._loadProducts();
    this._loadSportPlans();
    this._loadFoodPlans();
    this._loadGeneralDataThird();
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  get getGeneralStatus$(): StatusModel {
    return this._statusService.getGeneralStatus();
  }
  get getEventsList$(): IEvents[] {
    return this._statusService.getEventsList();
  }
  get getSportsList$(): ISports[] {
    return this._statusService.getSportsList();
  }
  get getThirdList$(): IThirdDataMap[] {
    return this._statusService.getThirdList();
  }
  get getLang$() {
    return this._statusService.getLangLocation().lang;
  }
  get getLangName$() {
    return this._statusService.getLangLocation().name;
  }
  get getLocation$() {
    return this._statusService.getLangLocation().location;
  }
  get getBirthdUbication$() {
    return this._statusService.getBirthdUbication();
  }
  get getHomeUbication$() {
    return this._statusService.getHomeUbication();
  }
  get getAge$() {
    return this._statusService.getGeneralStatus().age;
  }
  get getCurrency$(): string {
    return this._statusService?.getHomeUbication()?.currency;
  }
  get getUserType$() {
    return this._statusService?.getGeneralStatus().userType;
  }
  get getUserId$() {
    return this._statusService?.getGeneralStatus().userId;
  }
  get getToken$() {
    return this._statusService?.getGeneralStatus().token;
  }
  get getUserName$() {
    return this._statusService?.getGeneralStatus().username;
  }
  get getUser$() {
    return this._statusService?.getUser();
  }
  get getLangLocation$() {
    return (
      this._statusService?.getLangLocation()?.lang +
      "-" +
      this._statusService?.getLangLocation()?.location
    );
  }

  get getSportsService$(): Observable<IResSports> {
    return this._sportsService.getSports();
  }
  get getEventsService$(): Observable<IResEvents> {
    return this._eventsService.getEvents();
  }
  get getEventsScheduledService$(): Observable<IResUserEvents> {
    return this._eventsService.getUserEventSportsman(
      this._statusService.getGeneralStatus().userId
    );
  }
  get getRoutesService$(): Observable<IRoutes[]> {
    return this._routesService.getRoutes();
  }
  get getServicesService$(): Observable<IResServices> {
    return this._servicesService.getServices();
  }
  get getProductsService$(): Observable<IResProducts> {
    return this._productsService.getProducts();
  }

  get getSportPlanService$(): Observable<ISportPlans[]> {
    return this._sportPlansService.getSportPlan();
  }
  get getFoodPlansService$(): Observable<IFoodPlans[]> {
    return this._foodPlansService.getFoodPlans();
  }

  get getContractType$(): string {
    return this._statusService.getGeneralStatus().contractType;
  }
  get getServicesRecommended$(): IServices[] {
    return this._statusService?.getServicesList()?.filter((data: IServices) => {
      var contract = data.contractType === FREE_CONTRACT;
      switch (this.getContractType$) {
        case FREE_CONTRACT:
          contract = data.contractType === FREE_CONTRACT;
          break;
        case INTERMEDIATE_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT;
          break;
        case PREMIUM_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT ||
            data.contractType === PREMIUM_CONTRACT;
          break;
      }
      return contract;
    });
  }
  // XXX Parametro de filtro
  get getServicesRecommendedFilter$(): IServices[] {
    return this.getServicesRecommended$?.filter((data: IServices) => {
      return data.idSport === 1 || data.idSport === 2 || data.idSport === 3;
    });
  }
  get getEventsRecommended$(): IEvents[] {
    return this._statusService?.getEventsList()?.filter((data: IEvents) => {
      var contract = data.contractType === FREE_CONTRACT;
      switch (this.getContractType$) {
        case FREE_CONTRACT:
          contract = data.contractType === FREE_CONTRACT;
          break;
        case INTERMEDIATE_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT;
          break;
        case PREMIUM_CONTRACT:
          contract =
            data.contractType === FREE_CONTRACT ||
            data.contractType === INTERMEDIATE_CONTRACT ||
            data.contractType === PREMIUM_CONTRACT;
          break;
      }
      return contract;
    });
  }
  // XXX Parametro de filtro
  get getEventsRecommendedFilter$(): IEvents[] {
    return this.getEventsRecommended$?.filter((data: IEvents) => {
      return data.idSport === 10;
    });
  }
  get getSportPlansList$(): ISportPlans[] {
    return this._statusService.getSportPlansList();
  }
  get getFoodPlansList$(): IFoodPlans[] {
    return this._statusService.getFoodPlansList();
  }

  private _loadGeneralData(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralData(this.getGeneralStatus$.userId)
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResUserData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - UserHomeComponent - _loadGeneralData - res : ",
              res
            );
            setTimeout(() => {
              this._statusService.setUserId(this.getUserId$);
              this._statusService.setToken(this.getToken$);
              this._statusService.setUserName(this.getUserName$);
              this._statusService.setUserData(this.getUser$);

              this._statusService.setName(res.result?.name!);
              this._statusService.setLastName(res.result?.lastName!);
              this._statusService.setIdIdentificationType(
                res.result?.idIdentificationType!
              );
              this._statusService.setIdentificationNumber(
                res.result?.identificationNumber!
              );
              this._statusService.setBirthdUbication(
                res.result?.birthdUbication!
              );
              this._statusService.setHomeUbication(res.result?.homeUbication!);
              this._statusService.setGender(res.result?.gender!);
              this._statusService.setWeight(res.result?.weight!);
              this._statusService.setAge(res.result?.age!);
              this._statusService.setHeight(res.result?.height!);
              this._statusService.setIsVegan(res.result?.isVegan!);
              this._statusService.setIsvegetarian(res.result?.isvegetarian!);
              this._statusService.setIMC(res.result?.imc!);
              this._statusService.setContractType(res.result?.userPlan!);
              this._statusService.setIdSportPlan(res.result?.idSportPlan!);
              this._statusService.setIdFoodPlan(res.result?.idFoodPlan!);
            }, 200);
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private _loadGeneralDataThird(): void {
    this._statusService.spinnerShow();
    this._userDataService
      .getGeneralDataThird()
      .pipe(takeUntil(this._destroy$))
      .subscribe(
        (res: IResThirdData) => {
          if (!!res && res.success) {
            console.log(
              "🚀 XXX - UserHomeComponent - _loadGeneralDataThird - res : ",
              res
            );
            setTimeout(() => {
              let dataThird = this._mapGeneralDataThird(res.result!);
              this._statusService.setThirdList(dataThird);
            }, 100);
            this._statusService.spinnerHide();
          } else {
            this._statusService.spinnerHide();
          }
        },
        (err) => {
          this._statusService.toastError(
            this._translateService.instant("TOAST.ERROR")
          );
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private _mapGeneralDataThird(thirdData: IThirdData[]): IThirdDataMap[] {
    return thirdData.map((data: IThirdData) => {
      return {
        idUser: data.idUser,
        username: data.username,
        name: data.name,
        lastName: data.lastName,
        idIdentificationType: data.idIdentificationType.name,
        identificationNumber: data.identificationNumber,
        homeUbication: data.homeUbication,
        description: data.description,
        userType: data.idUserType.nameType,
        isThrid: data.isThrid,
      };
    });
  }

  private _loadSports(): void {
    this._statusService.spinnerShow();
    this.getSportsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResSports) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - UserHomeComponent - _loadSports - res : ", res);
          setTimeout(() => {
            this._statusService.setSportsList(res.result!);
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadEvents(): void {
    this._statusService.spinnerShow();
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - UserHomeComponent - _loadEvents - res : ", res);
          setTimeout(() => {
            this._statusService.setEventsList(res.result!);
            let events = res.result?.map((e) => {
              return {
                id: (e.idEvent || 0).toString(),
                title: e.name,
                description: e.description,
                date: e.date,
                backgroundColor: "#cbcbcb",
              };
            });
            this.calendarOptions.events = events;
            this._loadEventsScheduled();
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  private _loadEventsScheduled(): void {
    this._statusService.spinnerShow();
    this.getEventsScheduledService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserEvents) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadEventsScheduled - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setEventsListScheduled(
              res.result["consume-event"]!
            );
            let scheduledEvents = res.result["consume-event"]?.map((e) => {
              return {
                id: (e.idEvent || 0).toString(),
                title: e.name,
                description: e.description,
                date: e.date,
                backgroundColor: "#f85716",
              };
            });
            let allEvents = this.calendarOptions.events || [];
            // Filtrar todos los eventos
            allEvents = (allEvents as any[]).concat(scheduledEvents);

            this.calendarOptions.events = allEvents;
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  private _loadRoutes(): void {
    this._statusService.spinnerShow();
    this.getRoutesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IRoutes[]) => {
        if (!!res) {
          console.log("🚀 XXX - UserHomeComponent - _loadRoutes - res : ", res);
          setTimeout(() => {
            this._statusService.setRoutesList(res!);
            // Filtro
            this.routesRecommended = [res[0], res[1], res[2]] || [];
          }, 100);
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  private _loadServices(): void {
    this._statusService.spinnerShow();
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadServices - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setServicesList(res.result!);
            // this.servicesRecommended = res.result || [];
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  private _loadProducts(): void {
    this._statusService.spinnerShow();
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResProducts) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadProducts - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setProductsList(res.result!);
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadSportPlans(): void {
    this._statusService.spinnerShow();
    this.getSportPlanService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: ISportPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadSportPlans - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setSportPlansList(res);
            let sportPlans = res.filter(
              (p) => p.sportRoutineList && p.sportRoutineList.length > 0
            );
            if (sportPlans.length > 0) {
              this.sportRoutinesRecommended = sportPlans[0].sportRoutineList;
            }
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadFoodPlans(): void {
    this._statusService.spinnerShow();
    this.getFoodPlansService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IFoodPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadFoodPlans - res : ",
            res
          );
          setTimeout(() => {
            this._statusService.setFoodPlansList(res);
            let foodPlans = res.filter(
              (f) => f.foodRoutineList && f.foodRoutineList.length > 0
            );
            if (foodPlans.length > 0) {
              this.foodRoutinesRecommended = foodPlans[0].foodRoutineList;
            }
          }, 100);
          this._statusService.spinnerHide();
        } else {
          this._statusService.spinnerHide();
        }
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  goToEventSelected() {
    let btn = document.getElementById("btn-close-event-details");
    btn?.click();
    if (btn) {
      this.router.navigateByUrl("/usuario/eventos", {
        state: {
          data: this.eventSelected && this.eventSelected.id,
        },
      });
    }
  }
}
