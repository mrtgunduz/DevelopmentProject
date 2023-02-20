import { Component, OnInit } from '@angular/core';
import { ProductToastrService } from '../services/product-toastr.service';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private toast: ProductToastrService,
    private productService: ProductService
  ) {}
  title = 'Ürün Listesi';
  filterText = '';
  products!: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  sepetEkle(product) {
    this.toast.sepetSuccess(product.name, 'Sepete eklendi');
  }
}
