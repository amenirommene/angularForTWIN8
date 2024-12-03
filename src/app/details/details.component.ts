import { Category } from './../models/category';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id : number ;
  category : Category = new Category();
  constructor(private ac:ActivatedRoute, private cs:CategoryService){
    console.log("je suis le constructor");
  }

  ngOnInit(){
    console.log("je suis le ngOnInit");
  //  this.id= this.ac.snapshot.params['id'];
  //  console.log(this.ac.snapshot.params);
    this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));
    this.cs.getCategoryById(this.id).subscribe(
      res=>this.category=res);
   });


  //  this.ac.params.subscribe(res=>{this.id=res['name']; console.log(res)});
  }
}
