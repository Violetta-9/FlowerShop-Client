import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/header.component.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RegistrationModule} from "./features/registration/registration.component.module";
import {LoginModule} from "./features/login/login.component.module";
import {
  AdminService,
  BASE_PATH, OrderService,
  ProductCategoruService,
  ProductImageService, ProductInCardService,
  ProductService,
  UserService
} from "./core/services/flower-shop";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from "../environments/environment";
import {ToastrModule} from "ngx-toastr";
import {ErrorInterceptor} from "./core/interceptors/global-http-errors.inerceptor";
import {ProductModule} from "./features/product/product.component.module";
import {CarouselModule} from "./features/carousel/carousel.component.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { AppRoutingModule } from './app-routing.module';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import {RouterModule} from "@angular/router";
import { AdminComponent } from './pages/admin/admin.component';
import {AuthGuard} from "./shared/services/AuthGuard";
import {AuthService} from "./shared/services/AuthService";
import { DonotAccessComponent } from './pages/donot-access/donot-access.component';
import { HomeComponent } from './pages/home/home.component';
import {SearchPipe} from "./filters/searchPipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightDirective} from "./directives/highlightDirective";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { ProductListComponent } from './features/product-list/product-list.component';
import {Location, registerLocaleData} from '@angular/common';
import { ProductListForAdminComponent } from './features/product-list-for-admin/product-list-for-admin.component';
import {AuthInterceptor} from "./core/interceptors/auth.interceptor";
import {ObjectToArrayPipe} from "./core/pipe/ObjectToArray";
import { InputBoxComponent } from './features/input-box/input-box.component';
import {MaterialFileInputModule} from "ngx-material-file-input";
import {MatSelectModule} from "@angular/material/select";
import { AddProductComponent } from './features/add-product/add-product.component';
import { UpdateProductComponent } from './features/update-product/update-product.component';
import { ComfirmDeletComponent } from './features/comfirm-delet/comfirm-delet.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { ControlOrdersComponent } from './pages/control-orders/control-orders.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import localeRu from '@angular/common/locales/ru';
;




registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    AboutUsComponent,
    ContactsComponent,
    AdminComponent,
    DonotAccessComponent,
    HomeComponent,
    SearchPipe,
    HighlightDirective,
    ProductListComponent,
    ProductListForAdminComponent,
    ObjectToArrayPipe,
    InputBoxComponent,
    AddProductComponent,
    UpdateProductComponent,
    ComfirmDeletComponent,
    UserAccountComponent,
    ControlOrdersComponent,


  ],
  imports: [
    BrowserModule,
    HeaderModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    RegistrationModule,
    LoginModule,

    HttpClientModule,
    ToastrModule.forRoot(),
    ProductModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },

      useDefaultLang: true,
      defaultLanguage: "ru",

    }),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,

    MatInputModule,
    MatButtonModule,
    MaterialFileInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,

  ],
  providers: [
    UserService,{
      provide: BASE_PATH,
      useValue: environment.serverUri,
    },
    { provide: LOCALE_ID, useValue: 'ru' },
    OrderService,
    ProductService,
    ProductCategoruService,
    ProductImageService,
    AdminService,
Location,
    ProductInCardService,


    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}
