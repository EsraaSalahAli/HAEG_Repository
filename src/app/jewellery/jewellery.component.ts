import { Component } from '@angular/core';
import { IProduct } from '../SharedClassesAndTypes/IProduct';
import { JewelleryService } from '../Services/jewellery.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jewellery',
  templateUrl: './jewellery.component.html',
  styleUrls: ['./jewellery.component.scss']
})
export class JewelleryComponent {
  Products: IProduct[] = [];
  ErrorMessage: string = '';

  constructor(private jewelleryService: JewelleryService, private router: Router) {
  }


  ngOnInit(): void {
    this.jewelleryService.GetAllProducts().subscribe({
      next: data =>
        //console.log(data);
        this.Products = data.data,
      error: err => this.ErrorMessage = err
    })
  }
}
