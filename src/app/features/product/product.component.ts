import {Component, Input, OnInit} from "@angular/core";
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
  @Input() public product: ProductDTO = {};

  ngOnInit(): void {
    console.log(this.product.price)
  }



}

