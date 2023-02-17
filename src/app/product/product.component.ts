import { Component, OnInit } from '@angular/core';
import { ProductToastrService } from '../services/product-toastr.service';
import { Product } from './product';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private toast: ProductToastrService , private http:HttpClient) {}
  title = 'Ürün Listesi'
  filterText = '';
  products! : Product[] ;
  path = "http://localhost:3000/products";
  

  ngOnInit(): void {
   this.http.get<Product[]>(this.path).subscribe(data=>{
    this.products = data
   });
  }


  sepetEkle(product){
    this.toast.sepetSuccess(product.name,'Sepete eklendi')
  }
  
}
