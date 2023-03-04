import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPlansComponent } from "./user-plans.component";
import { UserPlansRoutingModule } from "./user-plans-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { FoodPlanComponent } from "./food-plan/food-plan.component";
import { SportPlanComponent } from "./sport-plan/sport-plan.component";

@NgModule({
  imports: [
    CommonModule,
    UserPlansRoutingModule,
    TranslateModule,
    DsTitleModule,
  ],
  declarations: [UserPlansComponent, FoodPlanComponent, SportPlanComponent],
})
export class UserPlansModule {}
