import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShopComponent } from './components/root/shop.component';

const routes: Routes = [
	{ path: '', component: ShopComponent },
	{ path: 'product-details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }