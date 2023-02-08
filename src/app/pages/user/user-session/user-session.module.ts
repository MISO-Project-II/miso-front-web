import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserSessionComponent } from "./user-session.component";
import { UserSessionRoutingModule } from "./user-session-routing.module";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    UserSessionRoutingModule,
    DsTitleModule,
    TranslateModule,
  ],
  declarations: [UserSessionComponent],
})
export class UserSessionModule {}
