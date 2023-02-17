import { Component, OnInit } from '@angular/core';
import { ProductToastrService } from '../services/product-toastr.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private toast: ProductToastrService) {}
  title = 'Ürün Listesi';
  filterText = '';
  products: Product[] = [
    {
      id: 1,
      name: 'Test',
      price: 2500,
      categoryId: 1,
      description: 'İphone 6',
      imageUrl: 'assets/images/ip6.png',
    },
    {
      id: 2,
      name: 'Best',
      price: 2600,
      categoryId: 1,
      description: 'İphone 7',
      imageUrl: 'assets/images/ip6.png',
    },
    {
      id: 3,
      name: 'Kest',
      price: 2700,
      categoryId: 1,
      description: 'İphone 8',
      imageUrl: 'assets/images/ip6.png',
    },
    {
      id: 4,
      name: 'Sest',
      price: 2800,
      categoryId: 1,
      description: 'İphone X',
      imageUrl: 'assets/images/ip6.png',
    },
  ];

  ngOnInit(): void {}


  sepetEkle(product){
    this.toast.sepetSuccess(product.name,'Sepete eklendi')
  }
  
}
