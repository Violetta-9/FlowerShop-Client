import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../registration/registration.component";
import {LoginComponent} from "../login/login.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  animal: string;
  name: string;
  constructor(private elementRef: ElementRef,public dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.elementRef.nativeElement.querySelectorAll('.nav-item').forEach((element: any) => {

      element.addEventListener('mouseenter', (event: any) => {
        if (window.innerWidth > 750) {
          var n= event.target.closest('.nav-item');
          n.classList.add('show');
        }

      });
    });

    this.elementRef.nativeElement.querySelectorAll('.nav-item').forEach((element: any) => {

      element.addEventListener('mouseleave', (event: any) => {
        if (window.innerWidth > 750) {
          var n= event.target.closest('.nav-item');
          if(!n.isHidden){
            n.classList.remove('show');
          }

        }

      });
    });
  }
  openRegisterDialog(){
    const dialogRef = this.dialog.open(RegistrationComponent, {
     minWidth: '40w',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  openLoginDialog(){
    const dialogRef = this.dialog.open(LoginComponent, {
      minWidth: '40w',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  title = 'FloweShop-Client';
  public isHidden: boolean=false;


}


