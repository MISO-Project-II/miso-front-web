import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { FoodProfileComponent } from "./food-profile/food-profile.component";
import { GeneralDataComponent } from "./general-data/general-data.component";
import { SportProfileComponent } from "./sport-profile/sport-profile.component";
import { GeographicProfileComponent } from "./geographic-profile/geographic-profile.component";
import { PlanDetailComponent } from "./plan-detail/plan-detail.component";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    TranslateModule,
    DsTitleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserProfileComponent,
    GeneralDataComponent,
    SportProfileComponent,
    FoodProfileComponent,
    GeographicProfileComponent,
    PlanDetailComponent,
    ConfigurationComponent,
  ],
})
export class UserProfileModule {}
