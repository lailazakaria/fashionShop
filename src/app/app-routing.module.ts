import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: 'details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sign-up', component: RegisterComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
