import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private URL_BASE = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  allProducts() {
    return this.http.get<Array<any>>(this.URL_BASE + '/products')
  }

  saveProduct(product: any) {
    return this.http.post(this.URL_BASE + '/product-store', product);
  }
}
