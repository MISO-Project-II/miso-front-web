import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {
  EVENTS,
  FOOD_PLANS,
  ROUTES,
  SERVICES,
  TRAINING_PLANS,
} from "src/constanst/data.constats";
import { ROUTES_NAMES } from "src/constanst/routes";
import { IResSuggestionEvents } from "src/models/suggestions/suggestion-events.interface";
import { IResSuggestionFoodPlan } from "src/models/suggestions/suggestion-food-plan.interface";
import { IResSuggestionRoutes } from "src/models/suggestions/suggestion-routes.interface";
import { IResSuggestionServices } from "src/models/suggestions/suggestion-services.interface";
import { IResSuggestionTrainingPlan } from "src/models/suggestions/suggestion-training-plan.interface";
import { StatusService } from "src/services/local/status.service";
import { SuggestionsEventsService } from "src/services/suggestions/suggestions-events.service";
import { SuggestionsFoodPlansService } from "src/services/suggestions/suggestions-food-plans.service";
import { SuggestionsRoutesService } from "src/services/suggestions/suggestions-routes.service";
import { SuggestionsServicesService } from "src/services/suggestions/suggestions-services.service";
import { SuggestionsTrainingPlanService } from "src/services/suggestions/suggestions-training-plan.service";

@Component({
  selector: "app-user-home",
  templateUrl: "./user-home.component.html",
  styleUrls: ["./user-home.component.scss"],
})
export class UserHomeComponent implements OnInit {
  public TRAINING_PLANS: string = TRAINING_PLANS;
  public FOOD_PLANS: string = FOOD_PLANS;
  public ROUTES: string = ROUTES;
  public EVENTS: string = EVENTS;
  public SERVICES: string = SERVICES;
  public ROUTES_NAMES = ROUTES_NAMES;

  public isUser: boolean;
  constructor(
    private _statusService: StatusService,
    private _router: Router,
    private _suggestionsEventsService: SuggestionsEventsService,
    private _suggestionsTrainingPlanService: SuggestionsTrainingPlanService,
    private _suggestionsFoodPlanService: SuggestionsFoodPlansService,
    private _suggestionsServicesService: SuggestionsServicesService,
    private _suggestionsRoutesService: SuggestionsRoutesService
  ) {}

  ngOnInit(): void {
    this.isUser = this._statusService.getIsUser();
  }

  get suggestionsEvents$(): Observable<IResSuggestionEvents> {
    return this._suggestionsEventsService.get(this._statusService.getUserId());
  }
  get suggestionsTrainingPlan$(): Observable<IResSuggestionTrainingPlan> {
    return this._suggestionsTrainingPlanService.get(
      this._statusService.getUserId()
    );
  }
  get suggestionsFoodPlan$(): Observable<IResSuggestionFoodPlan> {
    return this._suggestionsFoodPlanService.get(
      this._statusService.getUserId()
    );
  }
  get suggestionsServices$(): Observable<IResSuggestionServices> {
    return this._suggestionsServicesService.get(
      this._statusService.getUserId()
    );
  }
  get suggestionsRoutes$(): Observable<IResSuggestionRoutes> {
    return this._suggestionsRoutesService.get(this._statusService.getUserId());
  }

  public goTo(param: string): void {
    switch (param) {
      case TRAINING_PLANS:
        this._router.navigate([
          this._statusService.getUrlUser() + ROUTES_NAMES.PLANS,
        ]);
        break;
      case FOOD_PLANS:
        this._router.navigate([
          this._statusService.getUrlUser() + ROUTES_NAMES.PLANS,
        ]);
        break;
      case ROUTES:
        this._router.navigate([
          this._statusService.getUrlUser() + ROUTES_NAMES.EVENTS,
        ]);
        break;
      case EVENTS:
        this._router.navigate([
          this._statusService.getUrlUser() + ROUTES_NAMES.EVENTS,
        ]);
        break;
      case SERVICES:
        this._router.navigate([
          this._statusService.getUrlUser() + ROUTES_NAMES.SERVICES,
        ]);
        break;
      default:
        break;
    }
  }
}
