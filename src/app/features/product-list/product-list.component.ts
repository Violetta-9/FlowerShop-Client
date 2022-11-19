import {Component, Inject, Input, OnInit} from '@angular/core';
import {ProductDTO, ProductService} from "../../core/services/flower-shop";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductDTO[];

  public constructor(private route: ActivatedRoute,
                     private productService:ProductService,
                    ) {
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

     if(this.products==undefined){
       this.getProductByCategoryId();
     }

    });

  }


  private getProductByCategoryId() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('I'+id);
    this.productService.getProductByCategoryId(id).subscribe(product => {
      this.products=product
    });
  }

}
