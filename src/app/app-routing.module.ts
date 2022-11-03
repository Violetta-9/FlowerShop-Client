import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DeliveryComponent} from "./pages/delivery/delivery.component";
import {ProductComponent} from "./features/product/product.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthGuard} from "./shared/services/AuthGuard";
import {DonotAccessComponent} from "./pages/donot-access/donot-access.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductListComponent} from "./features/product-list/product-list.component";

const routes: Routes = [
  { path: 'delivary', component: DeliveryComponent},
  { path: 'category/:id', component: ProductListComponent},
  { path: 'home', component: HomeComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'donotAccess', component: DonotAccessComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),  CommonModule],
  exports: [RouterModule]
})



export class AppRoutingModule { }
