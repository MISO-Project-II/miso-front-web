import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { AllergiesService } from "./general/allergies.service";
import { DisabilitiesService } from "./general/disabilities.service";
import { IntolerancesService } from "./general/intolerances.service";
import { PainsService } from "./general/pains.service";
import { SportsService } from "./general/sports.service";
import { LoginService } from "./login/login.service";
import { ThirdRegisterService } from "./register/third-register.service";
import { UserRegisterService } from "./register/user-register.service";
import { StatusService } from "./local/status.service";
import { SuggestionsEventsService } from "./suggestions/suggestions-events.service";
import { SuggestionsFoodPlansService } from "./suggestions/suggestions-food-plans.service";
import { SuggestionsRoutesService } from "./suggestions/suggestions-routes.service";
import { SuggestionsServicesService } from "./suggestions/suggestions-services.service";
import { SuggestionsTrainingPlanService } from "./suggestions/suggestions-training-plan.service";
import { UpdatePlanService } from "./update-plan/update-plan.service";
import { UserDataService } from "./user-data/user-data.service";
import { ThirdDataService } from "./third-data/third-data.service";
import { ExercisesService } from "./general/exercises.service";
import { FoodPlansService } from "./home/plans/food-plans.service";
import { SportPlansService } from "./home/plans/sport-plans.service";
import { TrainingRoutinesService } from "./routines/training-routines.service";
import { FoodRoutinesService } from "./routines/food-routines.service";
import { FoodsService } from "./general/foods.service";
import { SportProfileService } from "./profile/sport-profile.service";
import { DemographicProfileService } from "./profile/demographic-profile.service";
import { FoodProfileService } from "./profile/food-profile.service";
import { EventsService } from "./home/events/events.service";
import { ServicesService } from "./home/services/services.service";
import { ProductsService } from "./home/products/products.service";
import { CountryStateCityService } from "./general/country-state-city.service";

@NgModule({
  imports: [CommonModule],
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        StatusService,

        DemographicProfileService,
        SportProfileService,
        FoodProfileService,

        EventsService,
        ServicesService,
        ProductsService,

        UpdatePlanService,

        LoginService,
        UserRegisterService,
        ThirdRegisterService,

        SuggestionsFoodPlansService,
        SuggestionsRoutesService,
        SuggestionsEventsService,
        SuggestionsTrainingPlanService,
        SuggestionsServicesService,

        SportsService,
        AllergiesService,
        DisabilitiesService,
        PainsService,
        IntolerancesService,

        UserDataService,
        ThirdDataService,

        SportPlansService,
        TrainingRoutinesService,
        ExercisesService,
        FoodPlansService,
        FoodRoutinesService,
        FoodsService,

        CountryStateCityService,
      ],
    };
  }
}
