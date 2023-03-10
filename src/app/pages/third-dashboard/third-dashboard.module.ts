import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdDashboardComponent } from "./third-dashboard.component";
import { ThirdDashboardRoutingModule } from "./third-dashboard-routing.module";
import { DsHorizontalMenuModule } from "src/app/shared/ds-horizontal-menu/ds-horizontal-menu.module";
import { DsVerticalMenuModule } from "src/app/shared/ds-vertical-menu/ds-vertical-menu.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    ThirdDashboardRoutingModule,
    DsHorizontalMenuModule,
    DsVerticalMenuModule,
    TranslateModule,
  ],
  declarations: [ThirdDashboardComponent],
})
export class ThirdDashboardModule {}
