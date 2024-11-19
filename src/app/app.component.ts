import { HeaderComponent } from './header/header.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTWIN8';
  @ViewChild(HeaderComponent) myChild:HeaderComponent;
  ngAfterViewInit(){
    console.log(this.myChild.isAdmin);
  }
}
