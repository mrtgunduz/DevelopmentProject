import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Ürün Listesi"
  products:  Product[] = [
    {id: 1, name: "Laptop", price:2500, categoryId:1, description: "Asus Zenbook",imageUrl: "assets/images/watch.png"},
    {id: 2, name: "Mouse", price:25, categoryId:2, description: "A4 Tech",imageUrl: "assets/images/box.png"},
    ];




  constructor () { }
    ngOnInit(): void {
      
    }
}
