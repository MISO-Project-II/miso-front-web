import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdEventsComponent } from "./third-events.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdEventsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdEventsRoutingModule {}
