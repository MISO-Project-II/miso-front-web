import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { THIRD_ROUTES } from "src/constanst/routes";
import { ThirdDashboardComponent } from "./third-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdDashboardComponent,
    children: THIRD_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdDashboardRoutingModule {}
