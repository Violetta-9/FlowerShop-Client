import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/header.component.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RegistrationModule} from "./features/registration/registration.component.module";
import {LoginModule} from "./features/login/login.component.module";
import {BASE_PATH, UserService} from "./core/services/flower-shop";
import { HttpClientModule} from '@angular/common/http';
import {environment} from "../environments/environment";





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
 RegistrationModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [
    UserService,{
      provide: BASE_PATH,
      useValue: environment.serverUri,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
