import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminService, ProductDTO} from "../../core/services/flower-shop";

@Component({
  selector: 'app-product-list-for-admin',
  templateUrl: './product-list-for-admin.component.html',
  styleUrls: ['./product-list-for-admin.component.css']
})
export class ProductListForAdminComponent implements OnInit {
  @Input() public productId: number;
  product:ProductDTO;
  constructor(private route: ActivatedRoute,
              private adminService:AdminService) { }

  ngOnInit(): void {
    console.log("ddddd"+this.productId)
    this.route.paramMap.subscribe(params => {
      this.getProductById();

    });


  }

  private getProductById() {

    this.adminService.getProductById(this.productId).subscribe(x=>this.product=x);
  }
}
