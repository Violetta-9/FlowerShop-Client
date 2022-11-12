import {Component, OnInit, Output} from '@angular/core';
import {AdminService, Body} from "../../core/services/flower-shop";
import {takeUntil} from "rxjs";
import {ComponentBase} from "../../core/components/abstractions/component-base";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends ComponentBase implements OnInit {
public data:any[];
  constructor(public adminService:AdminService) {
    super()
  }

  ngOnInit(): void {
  }


  add(newDepot:any) {
    console.log(newDepot.files)
    this.data = [];
    for (let i of newDepot.files.files) {
      this.data.push(i);

    }
    console.log("Add"+this.data)
   console.log(newDepot)
    this.adminService.addProductForm(newDepot.title, newDepot.description, newDepot.price, newDepot.productCategoryId, this.data.map(x => x))
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: (response) => {
          if (response) {
            console.log(response)
          }
        },
      });
  }
}
