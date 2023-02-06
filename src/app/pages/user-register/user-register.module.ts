import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRegisterComponent } from "./user-register.component";
import { UserRegisterRoutingModule } from "./user-register-routing.module";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    UserRegisterRoutingModule,
    DsBannerTitleModule,
    FormsModule,
    ReactiveFormsModule,
    DsTitleModule,
    TranslateModule,
  ],
  declarations: [UserRegisterComponent],
})
export class UserRegisterModule {}
