import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserPlansComponent } from "./user-plans.component";
import { UserPlansRoutingModule } from "./user-plans-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { FoodPlanComponent } from "./food-plan/food-plan.component";
import { TrainingPlanComponent } from "./training-plan/training-plan.component";

@NgModule({
  imports: [
    CommonModule,
    UserPlansRoutingModule,
    TranslateModule,
    DsTitleModule,
  ],
  declarations: [UserPlansComponent, FoodPlanComponent, TrainingPlanComponent],
})
export class UserPlansModule {}
