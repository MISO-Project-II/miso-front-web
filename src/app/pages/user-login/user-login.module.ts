import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserLoginComponent } from "./user-login.component";
import { UserLoginRoutingModule } from "./user-login-routing.module";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    UserLoginRoutingModule,
    DsBannerTitleModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [UserLoginComponent],
})
export class UserLoginModule {}
