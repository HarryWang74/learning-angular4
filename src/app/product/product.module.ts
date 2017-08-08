import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule} from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        component: ProductDetailComponent
      }
    ])
  ],
  declarations: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule { }
