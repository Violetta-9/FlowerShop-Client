import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogData, HeaderComponent} from "../header/header.component";
import {RegistrationComponent} from "../registration/registration.component";
import {AddUserDTO, LoginDTO, UserService} from "../../core/services/flower-shop";
import {EntityDetailsBaseComponent} from "../../core/components/abstractions/entity-details-base.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends EntityDetailsBaseComponent implements OnInit{


  hide=true
  constructor( public dialogRef: MatDialogRef<LoginComponent>,
               @Inject(MAT_DIALOG_DATA) public data: DialogData,
               public dialog: MatDialog,
               public loginUserService: UserService
               ) {
    super();
    this.createForm();
  }

  ngOnInit(): void {

    }

  private createForm() {
    this.detailsForm=new FormGroup({
      login: new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    })
  }

  openRegisterDialog() {
    this.dialogRef.close()
    const dialogRef = this.dialog.open(RegistrationComponent, {
      minWidth: '40w',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  saveInternal() {
    this.loginUserService.login({
      userLoginOrEmail:this.detailsForm.get('login').value,
      password: this.detailsForm.get('password').value
    }).subscribe(x=>console.log(x))
  }
}
