import { Product } from './../models/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
p: Product=new Product();
addP(){
  console.log(this.p);
}
}
