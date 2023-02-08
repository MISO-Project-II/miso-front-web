import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserServicesComponent } from "./user-services.component";
import { UserServicesRoutingModule } from "./user-services-routing.module";
import { SearchServicesComponent } from "./search-services/search-services.component";
import { ActualServicesComponent } from "./actual-services/actual-services.component";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { ActualProductsComponent } from "./actual-products/actual-products.component";
import { SearchProductsComponent } from "./search-products/search-products.component";

@NgModule({
  imports: [
    CommonModule,
    UserServicesRoutingModule,
    TranslateModule,
    DsTitleModule,
  ],
  declarations: [
    UserServicesComponent,
    ActualServicesComponent,
    SearchServicesComponent,
    ActualProductsComponent,
    SearchProductsComponent,
  ],
})
export class UserServicesModule {}
