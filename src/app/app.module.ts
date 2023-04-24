import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { ReviewComponent } from './review/review.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OffersComponent } from './Offers/Offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ElectronicComponent } from './electronic/electronic.component';
import { FashionComponent } from './fashion/fashion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccountComponent } from './account/account.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductComponent,
    OrderComponent,
    ReviewComponent,
    CartComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    OffersComponent,
    AboutUsComponent,
    CustomerServiceComponent,
    ElectronicComponent,
    FashionComponent,
    AccessoriesComponent,
    AccountComponent,
    JewelleryComponent,
    ProductDetailsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
