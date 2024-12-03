import { CategoryService } from './../services/category.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {
  id : number ;
  constructor(private cs:CategoryService, private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }
  listProducts : Product[]=[];
  list : Product[]=[];
  ngOnInit(){
    console.log("je suis le ngOnInit");
  //  this.id= this.ac.snapshot.params['id'];
  //  console.log(this.ac.snapshot.params);
    this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.cs.getListProductsByCategory(this.id).subscribe(
      res=>this.list=res);
   /* for(let p of this.listProducts){
      if (p.categoryId == this.id){
       this.list.push(p);
      }*/
     // this.cs.getListProductsByCategory(String(this.id)).subscribe(res=>this.list=res)
   });
  //  this.ac.params.subscribe(res=>{this.id=res['name']; console.log(res)});
  }



}
