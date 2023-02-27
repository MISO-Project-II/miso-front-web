import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ThirdProductsComponent } from "./third-products.component";
import { ThirdProductsRoutingModule } from "./third-products-routing.module";
import { TranslateModule } from "@ngx-translate/core";
import { DsTitleModule } from "src/app/shared/ds-title/ds-title.module";
import { CreateProductsComponent } from "./create-products/create-products.component";
import { CreatedProductsComponent } from "./created-products/created-products.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ThirdProductsRoutingModule,
    TranslateModule,
    DsTitleModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ThirdProductsComponent,
    CreateProductsComponent,
    CreatedProductsComponent,
  ],
})
export class ThirdProductsModule {}
