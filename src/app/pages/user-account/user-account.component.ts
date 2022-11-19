import { Component, OnInit } from '@angular/core';
import {ProductDTO, ProductInCardService} from "../../core/services/flower-shop";
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
public products:ProductDTO[];
  constructor(public productInCardServices: ProductInCardService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    const f=jwt_decode(localStorage.getItem('token'))
    // @ts-ignore
    console.log(f.nameid)
    // @ts-ignore
    this.productInCardServices.showProductsInCard(JSON.stringify(f.nameid)).subscribe(x=>this.products=x)
  }

  getTotalSum() {
    let result=0;
    for (const item of this.products) {
      result+=item.price*item.quentity;
    }
    return result;
  }
}
