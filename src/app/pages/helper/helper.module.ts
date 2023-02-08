import { HelperComponent } from "./helper.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HelperRoutingModule } from "./helper-routing.module";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsBannerTitleModule } from "src/app/shared/ds-banner-title/ds-banner-title.module";
import { DsHorizontalMenuModule } from "src/app/shared/ds-horizontal-menu/ds-horizontal-menu.module";
import { DsVerticalMenuModule } from "src/app/shared/ds-vertical-menu/ds-vertical-menu.module";

@NgModule({
  declarations: [HelperComponent],
  imports: [
    CommonModule,
    HelperRoutingModule,
    TranslateModule,

    DsTitleModule,
    DsBannerTitleModule,
    DsHorizontalMenuModule,
    DsVerticalMenuModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HelperModule {}
