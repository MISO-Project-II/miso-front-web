import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ROOT_ROUTES } from "./app.routing";

const root_routes: Routes = ROOT_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(root_routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
