import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdRegisterComponent } from "./third-register.component";
import { ThirdRegisterRoutingModule } from "./third-register-routing.module";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";

@NgModule({
  imports: [
    CommonModule,
    ThirdRegisterRoutingModule,
    DsBannerTitleModule,
    FormsModule,
    ReactiveFormsModule,
    DsTitleModule,
  ],
  declarations: [ThirdRegisterComponent],
})
export class ThirdRegisterModule {}
