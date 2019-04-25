import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopComponent } from './components/root/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule
  ],
  declarations: [
	ShopComponent, 
	FilterProductComponent, 
	ProductListComponent, 
	ProductDetailsComponent
  ]
})
export class ShopModule { }
