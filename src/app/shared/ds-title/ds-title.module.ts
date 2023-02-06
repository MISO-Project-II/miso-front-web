import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DsTitleComponent } from "./ds-title.component";

@NgModule({
  declarations: [DsTitleComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [DsTitleComponent],
})
export class DsTitleModule {}
