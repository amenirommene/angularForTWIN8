import { shortList } from './../models/shortlist';
import { Category } from './../models/category';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  title : string = "tesst";
  @Input() category: Category;
  @Output() notified = new EventEmitter<any>();
  @Output() add = new EventEmitter<shortList>();
  getDescription(desc:string){
    alert(desc);
  }
  addToShortList(){
    let x : shortList = {id: 1, idUser:1, idElement:this.category.id,
       typeElement:'category' }
    this.add.emit(x);
  }
  sendNotif(){
    this.notified.emit({"msg":"success", "code":400});
  }
}
