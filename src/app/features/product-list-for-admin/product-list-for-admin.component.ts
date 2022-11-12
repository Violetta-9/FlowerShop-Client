import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdminService, ProductDTO} from "../../core/services/flower-shop";
import {LoginComponent} from "../login/login.component";
import {MatDialog} from "@angular/material/dialog";
import {ComfirmDeletComponent} from "../comfirm-delet/comfirm-delet.component";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-list-for-admin',
  templateUrl: './product-list-for-admin.component.html',
  styleUrls: ['./product-list-for-admin.component.css']
})
export class ProductListForAdminComponent implements OnInit {
  @Input() public productId: number;
  product:ProductDTO;
  constructor(private route: ActivatedRoute,
              private adminService:AdminService,
              public dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log("ddddd"+this.productId)
    this.route.paramMap.subscribe(params => {
      this.getProductById();

    });


  }

  private getProductById() {

    this.adminService.getProductById(this.productId).subscribe(x=>this.product=x);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ComfirmDeletComponent, {
      minWidth: '40w',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
       this.adminService.deleteProduct(544).subscribe(x=>{
         if(x){
           this.showSuccess();
         }

       });

      }

    });


  }
  showSuccess() {
    this.toastr.success('Продукт успешно удален', 'Успех!');
  }
}
