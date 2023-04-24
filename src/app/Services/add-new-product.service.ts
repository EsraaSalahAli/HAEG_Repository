import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../SharedClassesAndTypes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class AddNewProductService {
  constructor(private http:HttpClient) { }

  AddProduct(product:IProduct):Observable<IProduct>
  {
    return this.http.post<IProduct>(`http://localhost:5099/api/Products`,product);
  }
}
