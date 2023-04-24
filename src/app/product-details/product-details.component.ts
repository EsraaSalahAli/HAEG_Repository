import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: any;
  Product!: IProduct;
  ErrorMessage: string = "";

  constructor(private activatedRoute: ActivatedRoute, private productsService: ProductService){}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get("id");
    }),
    this.productsService.GetProductByID(this.productId).subscribe({
      next: (data) => this.Product = data.data,
      error: (erorr: string) => this.ErrorMessage = erorr
    })
  }
}
