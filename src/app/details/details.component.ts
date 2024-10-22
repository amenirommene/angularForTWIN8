import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id : number ;
  constructor(private ac:ActivatedRoute){
    console.log("je suis le constructor");
  }

  ngOnInit(){
    console.log("je suis le ngOnInit");
  //  this.id= this.ac.snapshot.params['id'];
  //  console.log(this.ac.snapshot.params);
    this.ac.paramMap.subscribe(res=>{
    this.id=Number(res.get('id'));

   });
  //  this.ac.params.subscribe(res=>{this.id=res['name']; console.log(res)});
  }
}
