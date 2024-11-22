import { CardComponent } from './../card/card.component';
import { Category } from './../models/category';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { shortList } from '../models/shortlist';

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
getNotif(ch){
  alert ("bonjour " + ch.code + " " + ch.msg);
}

categories : Category[]= [
{"id":1,"title":"Grand électroménager", "image":"assets/images/categorie_electromenager.jpg", "description":"description 1", "available":true},
{"id":2,"title":"Petit électroménager", "image":"assets/images/categorie_petit_electromenager.jpg", "description":"description 2", "available":true},
{"id":3,"title":"Produits informatiques", "image":"assets/images/categorie_produits_informatiques.jpg", "description":"description 3", "available":true},
{"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg", "description":"description 4", "available":true},
{"id":5,"title":"TV, images et son", "image":"assets/images/categorie_tv_image_son.jpg", "description":"description 5", "available":false},
{"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg", "description":"description 6","available":false},
]

}
