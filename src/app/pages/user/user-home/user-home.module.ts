import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserHomeRoutingModule } from "./user-home-routing.module";
import { UserHomeComponent } from "./user-home.component";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";
import { FullCalendarModule } from "@fullcalendar/angular";

@NgModule({
  declarations: [UserHomeComponent],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    DsTitleModule,
    TranslateModule,
    FullCalendarModule
  ],
})
export class UserHomeModule {}
