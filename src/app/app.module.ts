import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HeaderModule} from "./features/header/header.component.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {RegistrationModule} from "./features/registration/registration.component.module";
import {LoginModule} from "./features/login/login.component.module";
import {BASE_PATH, ProductCategoruService, ProductService, UserService} from "./core/services/flower-shop";
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







@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    AboutUsComponent,
    ContactsComponent,
    AdminComponent,
    DonotAccessComponent,


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



    ],
  providers: [
    UserService,{
      provide: BASE_PATH,
      useValue: environment.serverUri,
    },
    ProductService,
    ProductCategoruService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
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
