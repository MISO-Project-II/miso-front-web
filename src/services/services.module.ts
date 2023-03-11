import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { SportsService } from "./general/sports.service";
import { LoginService } from "./login/login.service";
import { UserRegisterService } from "./register/user-register.service";
import { StatusService } from "./local/status.service";
import { UserDataService } from "./user-data/user-data.service";
import { ThirdDataService } from "./third-data/third-data.service";
import { SportProfileService } from "./profile/sport-profile.service";
import { DemographicProfileService } from "./profile/demographic-profile.service";
import { FoodProfileService } from "./profile/food-profile.service";
import { UbicationService } from "./general/ubication.service";
import { EventsService } from "./home/events/events.service";
import { ServicesService } from "./home/services/services.service";
import { ProductsService } from "./home/products/products.service";
import { RoutesService } from "./general/routes.service";
import { UpdatePlanService } from "./update-plan/update-plan.service";
import { SportPlansService } from "./home/plans/sport-plans.service";
import { FoodPlansService } from "./home/plans/food-plans.service";
import { SessionService } from "./general/session.service";

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
        RoutesService,

        UpdatePlanService,

        LoginService,
        UserRegisterService,
        // ThirdRegisterService,

        // SuggestionsFoodPlansService,
        // SuggestionsRoutesService,
        // SuggestionsEventsService,
        // SuggestionsSportPlanService,
        // SuggestionsServicesService,

        SportsService,
        // AllergiesService,
        // DisabilitiesService,
        // PainsService,
        // IntolerancesService,

        UserDataService,
        ThirdDataService,

        SportPlansService,
        // SportRoutinesService,
        // ExercisesService,
        FoodPlansService,
        // FoodRoutinesService,
        // FoodsService,

        UbicationService,
        SessionService,
      ],
    };
  }
}
