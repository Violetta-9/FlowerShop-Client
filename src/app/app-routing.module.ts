import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DeliveryComponent} from "./pages/delivery/delivery.component";
import {ProductComponent} from "./features/product/product.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {AuthGuard} from "./shared/services/AuthGuard";
import {DonotAccessComponent} from "./pages/donot-access/donot-access.component";

const routes: Routes = [
  { path: 'delivary', component: DeliveryComponent},
  { path: 'home/:id', component: ProductComponent},
  { path: 'home', component: ProductComponent},
  { path: 'aboutUs', component: AboutUsComponent},
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'donotAccess', component: DonotAccessComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),   CommonModule],
  exports: [RouterModule]
})



export class AppRoutingModule { }
