import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'En stock' : 'Indisponible';
  }


}
