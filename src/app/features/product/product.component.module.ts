import {ProductComponent} from "./product.component";
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {CarouselModule} from "../carousel/carousel.component.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    MatCardModule,
    CarouselModule,
    RouterModule,
    AppRoutingModule,
    CommonModule

  ],
  exports: [
    ProductComponent


  ],
})
export class ProductModule {
}
