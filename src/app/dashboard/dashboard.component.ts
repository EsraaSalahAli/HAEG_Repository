import { Component, OnInit } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { ProductService } from '../Services/product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { Product } from '../SharedClassesAndTypes/Product';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: IProduct[] = [];
  ErrorMessage: string = '';
  Edit!: EditProductComponent;

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.GetAllProducts().subscribe({
      next: data =>
        //console.log(data);
        this.products = data.data,
      error: err => this.ErrorMessage = err
    })
  }


}
