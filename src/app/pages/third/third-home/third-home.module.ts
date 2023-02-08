import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ThirdHomeRoutingModule } from "./third-home-routing.module";
import { ThirdHomeComponent } from "./third-home.component";

@NgModule({
  declarations: [ThirdHomeComponent],
  imports: [CommonModule, ThirdHomeRoutingModule],
})
export class ThirdHomeModule {}
