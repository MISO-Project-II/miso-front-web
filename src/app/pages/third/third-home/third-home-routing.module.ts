import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdHomeComponent } from "./third-home.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdHomeRoutingModule {}
