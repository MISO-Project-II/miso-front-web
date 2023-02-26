import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdServicesComponent } from "./third-services.component";
import { ThirdServicesRoutingModule } from "./third-services-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { CreateServicesComponent } from "./create-services/create-services.component";
import { CreatedServicesComponent } from "./created-services/created-services.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ThirdServicesRoutingModule,
    TranslateModule,
    DsTitleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ThirdServicesComponent,
    CreateServicesComponent,
    CreatedServicesComponent,
  ],
})
export class ThirdServicesModule {}
