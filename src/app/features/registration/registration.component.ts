import {Component, Inject, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginComponent} from "../login/login.component";
import {AddUserDTO, UserService} from "../../core/services/flower-shop";
import {EntityDetailsBaseComponent} from "../../core/components/abstractions/entity-details-base.component";
import {passwordValidator} from "../../shared/validators/passwords.valiadtor";
import {emailValidators} from "../../shared/validators/email.validator";

// @ts-ignore
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent extends EntityDetailsBaseComponent implements OnInit{

  hidePassword = true
  hideConfirmPassword = true

  constructor(
    public dialogRef: MatDialogRef<RegistrationComponent>,

    public dialog: MatDialog,
    public userService: UserService,
  ) {
    super()
    this._createForm()
  }

  ngOnInit(): void {

    }

  private _createForm() {
    this.detailsForm = new FormGroup({
      login: new FormControl('',[Validators.maxLength(256), Validators.required,]),
      firstName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      lastName: new FormControl('',[Validators.maxLength(256), Validators.required]),
      email: new FormControl('', [Validators.maxLength(256), Validators.required,emailValidators()]),
      password: new FormControl('',[ Validators.required]),
      passwordConfirm: new FormControl('', [ Validators.required]),
      phoneNumber: new FormControl('',[Validators.maxLength(15), Validators.required]),
          }, passwordValidator)
  }

  openLoginDialog() {
    this.dialogRef.close()
    const dialogRef = this.dialog.open(LoginComponent, {
      minWidth: '40w',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveInternal() {
   this.userService.registerUser(this.detailsForm.getRawValue()).subscribe(
     result => {

       if(result)
       {
         this.dialogRef.close();
       }
     }
   )

  }
}
