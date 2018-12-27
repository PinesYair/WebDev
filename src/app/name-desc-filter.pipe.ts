import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameDescFilter'
})
export class NameDescFilterPipe implements PipeTransform {

  transform(values: any[], startsWith: string): any {
    return values.filter((product) => product.name.toLowerCase().indexOf(startsWith.toLowerCase) == 0);
  }

}
