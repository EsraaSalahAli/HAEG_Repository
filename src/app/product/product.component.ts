import { Component } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ProductService } from '../Services/product.service';
import { Router } from '@angular/router';
import { ICategory } from '../SharedClassesAndTypes/ICategory';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  Products: IProduct[] = [];
  ErrorMessage: string = '';
  Categories: ICategory[] = [];
  loading: boolean = false;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.GetAllProducts()
    this.GetAllCategories()
  }

  GetAllProducts() {
    this.loading = true;
    this.productService.GetAllProducts().subscribe({
      next: data => {
        this.Products = data.data
        this.loading = false
      },
      error: err => {
        this.ErrorMessage = err
        this.loading = false
      }
    })
  }

  GetAllCategories() {
    this.loading = true;
    this.productService.GetAllCategories().subscribe({
      next: data => {
        this.Categories = data.data
        this.loading = false
      },
      error: err => {
        this.ErrorMessage = err
        this.loading = false
      }
    })
  }

  GetProductsWithCategory(category: string) {
    this.loading = true;
    this.productService.GetProductByCategory(category).subscribe({
      next: data => {
        this.Products = data.data
        this.loading = false
      }
      ,
      error: err => {
        this.ErrorMessage = err
        this.loading = false
      }
    })
  }

  FilterProducts(event: any) {
    this.loading = true;
    if (event.target.value == 'all') {
      this.GetAllProducts()
      this.loading = false
    }
    else {
      this.GetProductsWithCategory(event.target.value)
      this.loading = false
    }
  }

}
