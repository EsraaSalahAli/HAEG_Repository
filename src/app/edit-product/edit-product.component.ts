import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductService } from '../Services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBrand } from '../SharedClassesAndTypes/IBrand';
import { ICategory } from '../SharedClassesAndTypes/ICategory';
import { Product } from '../SharedClassesAndTypes/Product';
import { EditProductService } from '../Services/edit-product.service';
import { BrandService } from '../Services/brand.service';
import { CategoryService } from '../Services/category.service';
import { IOffer } from '../SharedClassesAndTypes/IOffer';
import { ISupplier } from '../SharedClassesAndTypes/ISupplier';
import { OfferService } from '../Services/offer.service';
import { SupplierService } from '../Services/supplier.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent {
  productId: any;
  Product: any;
  ErrorMessage: string = "";
  productForm!: FormGroup;
  productModel = new Product('', '', '', 0, 0, 0, 0, 0, 0);
  Categories: ICategory[] = []
  Offers: IOffer[] = []
  Brands: IBrand[] = []
  Suppliers: ISupplier[] = []
  base64: any;

  constructor(private supplierService:SupplierService,private offerService: OfferService, private brandService: BrandService, private categoryService: CategoryService, private fb: FormBuilder, private activatedRoute: ActivatedRoute, private productsService: ProductService, private editProduct: EditProductService, private router: Router) { }
  ngOnInit(): void {
    this.productForm = this.fb.group(
      {
        name: this.fb.control(
          '',
          [
            Validators.required,
            Validators.pattern('[a-z A-Z 0-9]+'),
            Validators.minLength(3),
            Validators.maxLength(50),
          ],
        ),
        description: this.fb.control('',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(500)
          ]),
        price: this.fb.control('',
          [
            Validators.required
          ]),
        quantity: this.fb.control('',
          [
            Validators.required
          ]),
        imageName: this.fb.control(
          '',
          [
            Validators.required,
          ]
        ),
        categoryID: this.fb.control(
          '',
          [
            Validators.required,
          ]
        ),
        brandID: this.fb.control(
          '',
          [
            Validators.required,
          ]
        ),
        offerID: this.fb.control(
          '',
          [
            Validators.required,
          ]
        ),
        supplierID: this.fb.control(
          '',
          [
            Validators.required,
          ]
        )
      }
    ),
      this.categoryService.GetAllCategories().subscribe({
        next: data =>
          //console.log(data);
          this.Categories = data.data,
        error: err => this.ErrorMessage = err
      }),
      this.brandService.GetAllBrands().subscribe({
        next: data =>
          //console.log(data);
          this.Brands = data.data,
        error: err => this.ErrorMessage = err
      }),
      this.offerService.GetAllOffers().subscribe({
        next: data =>
          //console.log(data);
          this.Offers = data.data,
        error: err => this.ErrorMessage = err
      }),
      this.supplierService.GetAllSuppliers().subscribe({
        next: data =>
          //console.log(data);
          this.Suppliers = data.data,
        error: err => this.ErrorMessage = err
      }),
      this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
    this.productId = params.get("id");
  }),
  this.productsService.GetProductByID(this.productId).subscribe({
    next: (data) => this.Product = data.data,
    error: (erorr: string) => this.ErrorMessage = erorr
  })
  }



  get name() {
    return this.productForm.get('name');
  }
  get description() {
    return this.productForm.get('description');
  }
  get price() {
    return this.productForm.get('price');
  }
  get quantity() {
    return this.productForm.get('quantity');
  }
  get imageName() {
    return this.productForm.get('imageName');
  }
  get categoryID() {
    return this.productForm.get('categoryID');
  }
  get brandID() {
    return this.productForm.get('brandID');
  }
  get offerID() {
    return this.productForm.get('offerID');
  }
  get supplierID() {
    return this.productForm.get('supplierID');
  }

submitData() {
  this.editProduct.EditProduct(this.productForm.value).subscribe({
    next: data => console.log(data),
    error: error => console.log(error)
  });
  console.log(this.productForm.value)
  this.router.navigate(['/Products'])
}

categorySelected(event: any) {
  this.categoryID?.setValue(event.target.value, { onlySelf: true, });
  console.log(" this.CategoryID   " + event.target.value)
}


brandSelected(event: any) {
  this.brandID?.setValue(event.target.value, { onlySelf: true, });
  console.log(" this.BrandID   " + event.target.value)
}

offerSelected(event: any) {
  this.offerID?.setValue(event.target.value, { onlySelf: true, });
  console.log(" this.OfferID   " + event.target.value)
}

supplierSelected(event: any) {
  this.supplierID?.setValue(event.target.value, { onlySelf: true, });
  console.log(" this.OfferID   " + event.target.value)
}

GetImagePath(event: any) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    this.base64 = reader.result
    this.productForm.get('imageName')?.setValue(event.target.files[0].name, { onlySelf: true, })
    console.log(this.base64)
  }
  console.log(event.target.files[0].name)
}

  // Update(Product:any){
  //   this.base64=Product.imageName
  //   console.log("Called")
  // }

}
