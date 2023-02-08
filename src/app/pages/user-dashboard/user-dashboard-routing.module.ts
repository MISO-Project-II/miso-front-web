import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { USER_ROUTES } from "src/constanst/routes";
import { UserDashboardComponent } from "./user-dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: UserDashboardComponent,
    children: USER_ROUTES,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserDashboardRoutingModule {}
