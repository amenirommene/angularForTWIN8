import { Category } from './models/category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ //décorateur de classe
  name: 'contains'
})
export class ContainsPipe implements PipeTransform {

  transform(items: any[], searchText:string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return JSON.stringify(item).toLowerCase().includes(searchText);
    });
  }

}
