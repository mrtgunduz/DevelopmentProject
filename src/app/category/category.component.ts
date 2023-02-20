import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private http: HttpClient) {}
  title = 'Kategori Listesi';
  categories!: Category[];
  path = 'http://localhost:3000/categories';

  ngOnInit(): void {
    this.http.get<Category[]>(this.path).subscribe((data) => {
      this.categories = data;
    });
  }
}
