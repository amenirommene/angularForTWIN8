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
}
