import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserPlansComponent } from "./user-plans.component";

const routes: Routes = [
  {
    path: "",
    component: UserPlansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPlansRoutingModule {}
