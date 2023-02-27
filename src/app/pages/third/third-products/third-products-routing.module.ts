import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThirdProductsComponent } from "./third-products.component";

const routes: Routes = [
  {
    path: "",
    component: ThirdProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdProductsRoutingModule {}
