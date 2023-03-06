import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThirdHomeRoutingModule } from "./third-home-routing.module";
import { ThirdHomeComponent } from "./third-home.component";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ThirdHomeComponent],
  imports: [
    CommonModule,
    ThirdHomeRoutingModule,
    DsTitleModule,
    TranslateModule,
  ],
})
export class ThirdHomeModule {}
