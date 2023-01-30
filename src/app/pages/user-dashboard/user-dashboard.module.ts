import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserDashboardComponent } from "./user-dashboard.component";
import { UserDashboardRoutingModule } from "./user-dashboard-routing.module";
import { DsHorizontalMenuModule } from "src/app/shared/ds-horizontal-menu/ds-horizontal-menu.module";
import { DsVerticalMenuModule } from "src/app/shared/ds-vertical-menu/ds-vertical-menu.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    DsHorizontalMenuModule,
    DsVerticalMenuModule,
    TranslateModule,
  ],
  declarations: [UserDashboardComponent],
})
export class UserDashboardModule {}
