import { ErrorComponent } from "./error.component";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ErrorRoutingModule } from "./error-routing.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErrorModule {}
