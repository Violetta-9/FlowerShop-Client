import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductListForAdminComponent} from "../product-list-for-admin/product-list-for-admin.component";

@Component({
  selector: 'app-comfirm-delet',
  templateUrl: './comfirm-delet.component.html',
  styleUrls: ['./comfirm-delet.component.css']
})
export class ComfirmDeletComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductListForAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
