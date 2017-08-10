import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { ShareModule } from '../share/share.module';

import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [
    ShareModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductGuardService ],
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [ProductListComponent, ProductDetailComponent, ProductFilterPipe],
  providers: [
    ProductGuardService, ProductService
  ]
})
export class ProductModule { }
