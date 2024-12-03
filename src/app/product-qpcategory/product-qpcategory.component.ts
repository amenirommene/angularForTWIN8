import { Product } from './../models/product';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product-qpcategory',
  templateUrl: './product-qpcategory.component.html',
  styleUrls: ['./product-qpcategory.component.css']
})
export class ProductQPCategoryComponent {

  id : number ;
  constructor(private ac:ActivatedRoute,private cs:CategoryService){
    console.log("je suis le constructor");
  }
  listProducts : Product[]=[
    {"id":1, "name":"Refrigérateur LG Inox","image":"assets/images/refrigerateur-lg.jpg","categoryId":1, "description":"","price":2800,"brand":"LG","promotion":0},
    {"id":2, "name":"Refrigérateur Samsung Blanc","image":"assets/images/refrigerateur_samsung.jpeg","categoryId":1, "description":"", "price":2400,"brand":"Samsung","promotion":0},
    {"id":3, "name":"Lave vaisselle Beko", "image":"assets/images/lave_vaisselle.png", "categoryId":1, "description":"","price":1875,"brand":"BEKO", "promotion":0},
    {"id":4, "name":"Oppo Smart Phone","image":"assets/images/oppo_smart.jpg","categoryId":4, "description":"", "price":1200,"brand":"OPPO","promotion":0},
    {"id":5, "name":"Hachoir", "image":"assets/images/hachoir.jpg","categoryId":2, "description":"","price":120,"brand":"Moulinex", "promotion":0},
    {"id":6, "name":"TV 50'' LG","image":"assets/images/tv_lg.jpg","categoryId":5, "description":"", "price":1800,"brand":"LG","promotion":0},
  ]
  list : Product[]=[];
  ngOnInit(){
    console.log("je suis le ngOnInit");
 //  this.id= this.ac.snapshot.queryParams['id'];
  //  console.log(this.ac.snapshot.params);
    this.ac.queryParamMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.cs.getListProductsByCategory(this.id).subscribe(
      res=>this.list=res);
   });
  //  this.ac.queryParams.subscribe(res=>{this.id=res['id']; console.log(res)});
  }

}
