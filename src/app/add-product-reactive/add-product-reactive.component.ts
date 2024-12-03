import { Product } from './../models/product';
import { CategoryService } from './../services/category.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-reactive',
  templateUrl: './add-product-reactive.component.html',
  styleUrls: ['./add-product-reactive.component.css']
})
export class AddProductReactiveComponent {
  nametest = new FormControl('test');
  myForm : FormGroup;
  constructor(private cs:CategoryService){}
  ngOnInit(){
    this.myForm=new FormGroup({
      namep : new FormControl("test",[Validators.required, Validators.minLength(5)]),
      pricep : new FormControl(),
      descriptionp: new FormControl("", Validators.required)
    })
  }

  get name(){
    return this.myForm.get('namep');
  }
  get price(){
    return this.myForm.get('pricep');
  }
  get description(){
    return this.myForm.get('descriptionp');
  }

  addProduct(){
    let p : Product = new Product();
    p.name=this.name.value;
    p.description=this.description.value;
    p.price=this.price.value;
    console.log(this.myForm.value)
    this.cs.addProduct(p).subscribe();
  }
}
