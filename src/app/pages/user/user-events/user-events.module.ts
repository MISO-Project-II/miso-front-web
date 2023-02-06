import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserEventsComponent } from "./user-events.component";
import { UserEventsRoutingModule } from "./user-events-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { ScheduledEventsComponent } from "./scheduled-events/scheduled-events.component";
import { SearchEventsComponent } from "./search-events/search-events.component";
import { SeeRoutesComponent } from "./see-routes/see-routes.component";

@NgModule({
  imports: [
    CommonModule,
    UserEventsRoutingModule,
    TranslateModule,
    DsTitleModule,
  ],
  declarations: [
    UserEventsComponent,
    ScheduledEventsComponent,
    SearchEventsComponent,
    SeeRoutesComponent,
  ],
})
export class UserEventsModule {}
