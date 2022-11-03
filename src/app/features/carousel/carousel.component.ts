import {Component, Input, OnInit, ViewChild} from "@angular/core";
import {NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource} from "@ng-bootstrap/ng-bootstrap";
import {ProductImageDTO, ProductImageService} from "../../core/services/flower-shop";


@Component({
  selector: 'app-carousel-card',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit{
  @Input() productId: number;
  images: ProductImageDTO[];
  public constructor(public productoImageService:ProductImageService){

  }
  ngOnInit(): void {
this.getImage();
console.log("jjjjjjjjjjjjjjjjjjjjjjjjjj")
  }
  showNavigationArrows = true;
  showNavigationIndicators = true;
  image = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);


  // @ts-ignore
  private getImage() {

    this.productoImageService.getImagesByProductId(this.productId).subscribe(
      im=>this.images=im);
  }
}
