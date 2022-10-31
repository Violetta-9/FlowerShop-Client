import {Component, Inject, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

import {RegistrationComponent} from "../registration/registration.component";
import {AddUserDTO, LoginDTO, UserService} from "../../core/services/flower-shop";
import {EntityDetailsBaseComponent} from "../../core/components/abstractions/entity-details-base.component";
import {ToastrService} from "ngx-toastr";
import jwt_decode from "jwt-decode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends EntityDetailsBaseComponent implements OnInit{


  hide=true
  constructor( public dialogRef: MatDialogRef<LoginComponent>,
               public router: Router,
               public dialog: MatDialog,
               public loginUserService: UserService,
               private toastr: ToastrService
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
    }).subscribe(x=>{
      if(x){
        const f=jwt_decode(x)
        // @ts-ignore
        if(f.role=="Admin"){
          this.dialogRef.close();
          localStorage.setItem('token',x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.router.navigate(['/admin']);
          this.showSuccessForAdmin();

        }else{
          this.dialogRef.close();
          localStorage.setItem('token',x);
          // @ts-ignore
          localStorage.setItem('role', f.role);
          this.showSuccess();
          this.router.navigate(['/home']);
        }


      }


    });
  }
  showSuccess() {
    this.toastr.success('Вы успешно вошли в аккаунт', 'Успех!');
  }
  showSuccessForAdmin() {
    this.toastr.success('Вы успешно вошли как Админ', 'Успех!');
  }
}
