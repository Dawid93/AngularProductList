import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductsDetailGuard } from './products-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent },
      { path: 'products/:id', canActivate: [ProductsDetailGuard], component: ProductDetailsComponent }
    ]),
    SharedModule,
  ]
})
export class ProductModule { }
