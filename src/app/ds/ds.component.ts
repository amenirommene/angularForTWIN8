import { Component } from '@angular/core';

@Component({
  selector: 'app-ds',
  templateUrl: './ds.component.html',
  styleUrls: ['./ds.component.css']
})
export class DsComponent {
  products = [
    { name: 'Laptop', price: 1500, available: true, releaseDate: new Date(2020, 5, 10) },
     { name: 'Smartphone', price: 800, available: false, releaseDate: new Date(2021, 3, 15) },
     { name: 'Tablet', price: 400, available: true, releaseDate: new Date(2019, 7, 25) } ];
    }


