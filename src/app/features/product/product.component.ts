import {Component, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductDTO, ProductService} from "../../core/services/flower-shop";
import {shouldBeautify} from "@angular-devkit/build-angular/src/utils/environment-options";


@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products: ProductDTO[];
  public constructor(private route: ActivatedRoute,
                     private productService:ProductService,
                     private location: Location) {
  }
  ngOnInit(): void {
    this.getProductById();
  }


  private getProductById() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('I'+id);
    this.productService.getProductByCategoryId(id).subscribe(product => {
      this.products=product
    });
  }


}

