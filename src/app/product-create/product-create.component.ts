import { Component, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent {
  name: string = '';
  qtd: number = 0;

  constructor(private productService: ProductService) {
  }

  onSave() {
    const product = new Product(this.name, this.qtd);
    this.productService.saveProduct(product).subscribe();
  }
}
