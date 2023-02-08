import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdLoginComponent } from "./third-login.component";
import { ThirdLoginRoutingModule } from "./third-login-routing.module";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    ThirdLoginRoutingModule,
    DsBannerTitleModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [ThirdLoginComponent],
})
export class ThirdLoginModule {}
