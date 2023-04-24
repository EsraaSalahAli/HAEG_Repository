import { Component, OnInit } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { AccessoriesService } from '../Services/accessories.service';
import { Router } from '@angular/router';
import { FashionService } from '../Services/fashion.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.scss']
})
export class FashionComponent implements OnInit {
  Products: IProduct[] = [];
  ErrorMessage: string = '';

  constructor(private fashionService: FashionService, private router: Router) {
  }


  ngOnInit(): void {
    this.fashionService.GetAllProducts().subscribe({
      next: data =>
        //console.log(data);
        this.Products = data.data,
      error: err => this.ErrorMessage = err
    })
  }

}

