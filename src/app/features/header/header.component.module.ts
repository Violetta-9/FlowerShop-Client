import { NgModule } from "@angular/core";
import { HeaderComponent} from "./header.component";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {TranslateModule} from "@ngx-translate/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [
    HeaderComponent,


  ],
  imports: [
    NgbCollapseModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    TranslateModule,
    BrowserModule, /* or CommonModule */
    RouterModule,
    RouterTestingModule,
    AppRoutingModule,


  ],
  exports: [
    HeaderComponent,


  ],
})
export class HeaderModule {
}
