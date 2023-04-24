import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { IAPIResult } from '../SharedClassesAndTypes/IAPIResult';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  GetAllOffers():Observable<IAPIResult>
  {
    return this.http.get<IAPIResult>("http://localhost:5099/api/Offers");
  }
}
