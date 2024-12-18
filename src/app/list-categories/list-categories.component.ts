import { CardComponent } from './../card/card.component';
import { Category } from './../models/category';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { shortList } from '../models/shortlist';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
list : shortList[]=[];
titre : string = "";
message : string = "Ceci est un test";
myDate : Date = new Date(2024,6,6);
//injecter le service categoryService sous le nom de cs
constructor(private cs:CategoryService){}
@ViewChildren(CardComponent) children: QueryList<CardComponent>;
  ngAfterViewInit() {
    this.children.forEach(child => {
      console.log('Child component:', child.title);
    })

  }
f(val:string){
  console.log("event binding" + val);
}
addToShortList(elt:shortList){
this.list.push(elt);
console.log(this.list);
}
getNotification(ch){
  alert ("bonjour " + ch.code + " " + ch.msg);
}

categories : Category[]= [];
ngOnInit(){
  //appel synchrone
//  this.categories = this.cs.getListCategories();
 this.cs.getListCategoriesFromBackend().subscribe(
  res=>this.categories=res);
}
}
