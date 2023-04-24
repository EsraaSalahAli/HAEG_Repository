import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ReviewComponent } from './review/review.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OffersComponent } from './Offers/Offers.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccountComponent } from './account/account.component';
import { JewelleryComponent } from './jewellery/jewellery.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';


const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent, },
  { path: 'Products', component: ProductComponent, },
  { path: 'Electronic', component: ElectronicComponent },
  { path: 'Fashion', component: FashionComponent },
  { path: 'Accessories', component: AccessoriesComponent },
  { path: 'Jewellery', component: JewelleryComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Order', component: OrderComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Review', component: ReviewComponent },
  { path: 'Offers', component: OffersComponent },
  { path: 'CustomerService', component: CustomerServiceComponent },
  { path: 'AboutUs', component: AboutUsComponent },
  { path: 'Account', component: AccountComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Products/Add', component: AddProductComponent },
  { path: 'Products/Edit/:id', component: EditProductComponent },
  { path: 'Products/Delete/:id', component: DeleteProductComponent },
  { path: 'Products/:id', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
