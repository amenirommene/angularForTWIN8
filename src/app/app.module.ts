import { ContactModule } from './contact/contact.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContainsPipe } from './contains.pipe';
import { HighlightDirective } from './highlight.directive';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductQPCategoryComponent } from './product-qpcategory/product-qpcategory.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddProductReactiveComponent } from './add-product-reactive/add-product-reactive.component';
import { CardComponent } from './card/card.component';
import { MyPipePipe } from './my-pipe.pipe';
import { MyDirective } from './my.directive';
import { DsComponent } from './ds/ds.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    //la liste des composants
    //des pipes  et directives personnalisées
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    ContainsPipe,//pipe
    HighlightDirective, TestComponent, NotFoundComponent, ProductsCategoryComponent, ProductQPCategoryComponent, DetailsComponent, AddProductComponent, AddProductReactiveComponent, CardComponent, MyPipePipe, MyDirective, DsComponent //directive
  ],
  imports: [ //la liste des modules qu'on a besoin
    BrowserModule,
    AppRoutingModule,
    FormsModule ,//pour pouvoir utiliser ngModel
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
