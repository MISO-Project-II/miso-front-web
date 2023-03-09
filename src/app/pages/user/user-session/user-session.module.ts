import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserSessionComponent } from "./user-session.component";
import { UserSessionRoutingModule } from "./user-session-routing.module";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";
import { NgxGaugeModule } from "ngx-gauge";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserSessionRoutingModule,
    DsTitleModule,
    TranslateModule,
    DsTitleModule,
    DsBannerTitleModule,
    NgxGaugeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UserSessionComponent],
})
export class UserSessionModule {}
