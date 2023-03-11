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
  Food,
  FoodRoutineList,
  IFoodPlans,
} from "src/models/home/food-plans.interface";
import { IResProducts } from "src/models/home/products.interface";
import { IResServices, IServices } from "src/models/home/services.interface";
import {
  ISportPlans,
  Sport,
  SportFrecuency,
  SportRoutineList,
} from "src/models/home/sport-plans.interface";
import { StatusModel } from "src/models/local/status-model";
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

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  private _destroy$: Subject<boolean> = new Subject<boolean>();
  eventSelected: any;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: "prev",
      center: "title",
      right: "next",
    },
    initialView: "dayGridMonth",
    plugins: [dayGridPlugin],
    events: [
      // { title: "event 1", date: "2023-03-01" },
      // { title: "event 2", date: "2023-03-02" },
    ],
    eventClick: (arg) => {
      console.log("click event", arg.event);
      this.eventSelected = arg.event;
      let btn = document.getElementById("btn-event-details");
      btn?.click();
    },
  };
  sportRoutinesRecommended: SportRoutineList[] = [];
  foodRoutinesRecommended: FoodRoutineList[] = [];
  routesRecommended: IRoutes[] = [];
  servicesRecommended: IServices[] = [];

  constructor(
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
    console.log("XXX - UserHomeComponent");
    this._loadGeneralData();
    this._loadSports();
    this._loadEvents();
    this._loadRoutes();
    this._loadServices();
    this._loadProducts();
    this._loadSportPlans();
    this._loadFoodPlans();
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
            this._statusService.setIMC(res.result?.imc!);
            this._statusService.setContractType(res.result?.userPlan!);
          }
          this._statusService.spinnerHide();
        },
        (err) => {
          console.error(err);
          this._statusService.spinnerHide();
        }
      );
  }
  private _loadSports(): void {
    this._statusService.spinnerShow();
    this.getSportsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResSports) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - UserHomeComponent - _loadSports - res : ", res);
          this._statusService.setSportsList(res.result!);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadEvents(): void {
    this.getEventsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResEvents) => {
        if (!!res && res.success) {
          console.log("🚀 XXX - UserHomeComponent - _loadEvents - res : ", res);
          this._statusService.setEventsList(res.result!);
          let events = res.result?.map((e) => {
            return {
              id: (e.idEvent || 0).toString(),
              title: e.name,
              description: e.description,
              date: e.date,
              backgroundColor: "#03c5de",
            };
          });
          this.calendarOptions.events = events;
          this._loadEventsScheduled();
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  private _loadEventsScheduled(): void {
    this.getEventsScheduledService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResUserEvents) => {
        if (!!res && res.success) {
          console.log(
            "XXX - ScheduledEventsComponent - _loadEventsScheduled - res",
            res
          );
          this._statusService.setEventsListScheduled(
            res.result["consume-event"]!
          );
          let scheduledEvents = res.result["consume-event"]?.map((e) => {
            return {
              id: (e.idEvent || 0).toString(),
              title: e.name,
              description: e.description,
              date: e.date,
              backgroundColor: "#007bff",
            };
          });
          let allEvents = this.calendarOptions.events || [];
          allEvents = (allEvents as any[]).concat(scheduledEvents);
          this.calendarOptions.events = allEvents;
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }

  private _loadRoutes(): void {
    this.getRoutesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IRoutes[]) => {
        if (!!res) {
          console.log("🚀 XXX - UserHomeComponent - _loadRoutes - res : ", res);
          this._statusService.setRoutesList(res!);
          this.routesRecommended = res || [];
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  private _loadServices(): void {
    this.getServicesService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResServices) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadServices - res : ",
            res
          );
          this._statusService.setServicesList(res.result!);
          this.servicesRecommended = res.result || [];
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
  private _loadProducts(): void {
    this.getProductsService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IResProducts) => {
        if (!!res && res.success) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadProducts - res : ",
            res
          );
          this._statusService.setProductsList(res.result!);
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadSportPlans(): void {
    this.getSportPlanService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: ISportPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadSportPlans - res : ",
            res
          );
          this._statusService.setSportPlansList(res);
          let sportPlans = res.filter(
            (p) => p.sportRoutineList && p.sportRoutineList.length > 0
          );
          if (sportPlans.length > 0) {
            this.sportRoutinesRecommended = sportPlans[0].sportRoutineList;
          }
        }
        this._statusService.spinnerHide();
      },
      (err) => {
        console.error(err);
        this._statusService.spinnerHide();
      }
    );
  }
  private _loadFoodPlans(): void {
    this.getFoodPlansService$.pipe(takeUntil(this._destroy$)).subscribe(
      (res: IFoodPlans[]) => {
        if (!!res) {
          console.log(
            "🚀 XXX - UserHomeComponent - _loadFoodPlans - res : ",
            res
          );
          this._statusService.setFoodPlansList(res);
          let foodPlans = res.filter(
            (f) => f.foodRoutineList && f.foodRoutineList.length > 0
          );
          if (foodPlans.length > 0) {
            this.foodRoutinesRecommended = foodPlans[0].foodRoutineList;
          }
        }
        this._statusService.spinnerHide();
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
