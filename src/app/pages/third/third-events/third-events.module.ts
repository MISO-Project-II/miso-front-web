import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdEventsComponent } from "./third-events.component";
import { ThirdEventsRoutingModule } from "./third-events-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { CreateEventsComponent } from "./create-events/create-events.component";
import { CreatedEventsComponent } from "./created-events/created-events.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ThirdEventsRoutingModule,
    TranslateModule,
    DsTitleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ThirdEventsComponent,
    CreateEventsComponent,
    CreatedEventsComponent,
  ],
})
export class ThirdEventsModule {}
