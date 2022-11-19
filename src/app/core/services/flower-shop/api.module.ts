import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { AdminService } from './api/admin.service';
import { AdminProductImageService } from './api/adminProductImage.service';
import { OrderService } from './api/order.service';
import { ProductService } from './api/product.service';
import { ProductCategoruService } from './api/productCategoru.service';
import { ProductImageService } from './api/productImage.service';
import { ProductInCardService } from './api/productInCard.service';
import { UserService } from './api/user.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    AdminService,
    AdminProductImageService,
    OrderService,
    ProductService,
    ProductCategoruService,
    ProductImageService,
    ProductInCardService,
    UserService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<any> {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
