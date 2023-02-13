import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = "Ürün Listesi"
  products: any[] = [
    {id: 1, name: "Laptop", price:2500, categoryId:1, description: "Asus Zenbook"},
    {id: 2, name: "Mouse", price:25, categoryId:2, description: "A4 Tech"},
    ];




  constructor () { }
    ngOnInit(): void {
      
    }
}
