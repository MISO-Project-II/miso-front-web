import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IResProducts } from "src/models/home/products.interface";
import { ProductsService } from "src/services/home/products/products.service";

@Component({
  selector: "app-search-products",
  templateUrl: "./search-products.component.html",
  styleUrls: ["./search-products.component.scss"],
})
export class SearchProductsComponent implements OnInit {
  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    console.log("XXX - SearchProductsComponent");
  }
  get productsServiceGetAll$(): Observable<IResProducts> {
    return this._productsService.getAll();
  }
}
