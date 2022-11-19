import {Component, Input, OnInit} from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductDTO, ProductInCardService, ProductService} from "../../core/services/flower-shop";
import {shouldBeautify} from "@angular-devkit/build-angular/src/utils/environment-options";
import jwt_decode from "jwt-decode";


@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() public product: ProductDTO;
constructor(public cardservices:ProductInCardService) {
}
  ngOnInit(): void {

  }


  addProduct() {
    const f=jwt_decode(localStorage.getItem('token'))
    // @ts-ignore
    this.cardservices.addProductInCardForm(this.product.id,1,f.nameid).subscribe(x=>console.log(x))

  }
}

