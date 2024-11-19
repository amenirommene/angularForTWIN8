import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';
import { ProductQPCategoryComponent } from './product-qpcategory/product-qpcategory.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"home", component:HomeComponent, children:[
    {path:"details/:id", component:DetailsComponent}
  ]},
  {path:"addp", component:AddProductComponent},
  {path:"add", component:AddProductReactiveComponent},
  {path:"",redirectTo:"home", pathMatch:"full"},
  {path:"product", loadChildren: () => import('./product/product.module').then(m => m.ProductModule)},
  {path:"contact", loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
  {path:"profile", loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
  {path:"apropos", loadChildren: () => import('./apropos/apropos.module').then(m => m.AProposModule)},
  {path:"productsCategory/:id/:name", component:ProductsCategoryComponent},
  {path:"products", component:ProductQPCategoryComponent},
  {path:"**", component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
