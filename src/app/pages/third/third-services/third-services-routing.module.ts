import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdServicesComponent } from "./third-services.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdServicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdServicesRoutingModule {}
