import { NgModule } from "@angular/core";
import { HeaderComponent} from "./header.component";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    NgbCollapseModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule

  ],
  exports: [
    HeaderComponent,

  ],
})
export class HeaderModule {
}
