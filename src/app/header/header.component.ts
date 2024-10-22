import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isAdmin : boolean = true;
classAdmin :string = 'navbar navbar-expand-lg navbar-light bg-light';
classNotAdmin :string = 'navbar navbar-expand-lg navbar-dark bg-dark';
}
