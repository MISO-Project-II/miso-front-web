import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IRoutes } from "src/models/general/routes.interface";
import { StatusService } from "src/services/local/status.service";

@Component({
  selector: "app-see-routes",
  templateUrl: "./see-routes.component.html",
  styleUrls: ["./see-routes.component.scss"],
})
export class SeeRoutesComponent implements OnInit {
  private _routeSelected: IRoutes = null!;
  constructor(private _statusService: StatusService) {}

  ngOnInit(): void {
    console.log("XXX - SeeRoutesComponent");
  }
  get getRoutesList$(): IRoutes[] {
    return this._statusService.getRoutesList();
  }
  get getRoute$(): IRoutes {
    return this._routeSelected;
  }
  public setRoute(routeSelected: IRoutes) {
    this._routeSelected = routeSelected;
  }
}
