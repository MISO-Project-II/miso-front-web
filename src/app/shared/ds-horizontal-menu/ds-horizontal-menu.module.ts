import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DsHorizontalMenuComponent } from "./ds-horizontal-menu.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [DsHorizontalMenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DsHorizontalMenuComponent],
})
export class DsHorizontalMenuModule {}
