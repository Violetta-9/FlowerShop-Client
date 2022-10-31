import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";
import {ProductImageService} from "../../core/services/flower-shop";


@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() productId: bigint;
  public constructor(public productoImageService:ProductImageService){

  }
  ngOnInit(): void {
this.getImage();
  }
  showNavigationArrows = true;
  showNavigationIndicators = true;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  private getImage() {
    this.productoImageService.getImagesByProductId(1)
  }
}
