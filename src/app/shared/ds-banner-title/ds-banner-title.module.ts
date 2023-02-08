import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DsBannerTitleComponent } from "./ds-banner-title.component";

@NgModule({
  imports: [CommonModule],
  declarations: [DsBannerTitleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DsBannerTitleComponent],
})
export class DsBannerTitleModule {}
