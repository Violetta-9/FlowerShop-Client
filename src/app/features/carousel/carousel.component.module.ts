
import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {CarouselComponent} from "./carousel.component";
import {NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    MatCardModule,
    NgbCarouselModule,
    FormsModule,
    CommonModule

  ],
  exports: [
    CarouselComponent


  ],
})
export class CarouselModule {
}
