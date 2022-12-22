import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService) {
    this.products = []
  }

  ngOnInit() {
    this.productService.allProducts().subscribe(
      (data) => {
        this.products = data;
      }
    );
    
  }
}
