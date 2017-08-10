import { Component, OnInit } from '@angular/core';
import { IProduct } from '../i-product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  listFilter: string;
  errorMessage: string;
  showImage: boolean = false;
  products: IProduct[];
  
  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
        products =>this.products = products,
        error => this.errorMessage = <any>error
    );
  }

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

}
