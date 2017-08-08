import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { ProductGuardService } from './product-guard.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductGuardService],
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [ProductListComponent, ProductDetailComponent],
  providers: [
    ProductGuardService
  ]
})
export class ProductModule { }
