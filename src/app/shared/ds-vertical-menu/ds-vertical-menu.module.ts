import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DsVerticalMenuComponent } from "./ds-vertical-menu.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [DsVerticalMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DsVerticalMenuComponent],
})
export class DsVerticalMenuModule {}
