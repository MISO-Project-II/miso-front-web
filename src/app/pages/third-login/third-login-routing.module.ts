import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdLoginComponent } from "./third-login.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdLoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdLoginRoutingModule {}
