import {Component, Input, OnInit} from '@angular/core';
import {AdminService, ProductDTO, ProductService} from "../../core/services/flower-shop";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
 public productId:number;
  public product:ProductDTO;
  constructor(private adminService:AdminService,
              private route: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.getProductIdFromRout()
    this.getProduct()

  }
  public  getProduct(){
    this.adminService.getProductById(this.productId).subscribe(data => this.product=data);

  }
  public getProductIdFromRout(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productId=id;
    console.log('IdUpdate'+id);
  }


  update(event: any) {
    console.log(event)
    this.adminService.updateProductForm(this.productId,event.title,event.description,event.price,event.productCategoryId).subscribe(x=>console.log(x))
  }
}
