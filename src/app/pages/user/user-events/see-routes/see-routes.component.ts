import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IResRoutes } from "src/models/general/routes.interface";
import { RoutesService } from "src/services/general/routes.service";

@Component({
  selector: "app-see-routes",
  templateUrl: "./see-routes.component.html",
  styleUrls: ["./see-routes.component.scss"],
})
export class SeeRoutesComponent implements OnInit {
  constructor(private _routesService: RoutesService) {}

  ngOnInit(): void {
    console.log("XXX - SeeRoutesComponent");
  }
  get routesServiceGetAll$(): Observable<IResRoutes> {
    return this._routesService.getAll();
  }
}
