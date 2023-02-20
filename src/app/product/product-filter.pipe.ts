import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], ...filterText: any): Product[] {
    return filterText
      ? value.filter(
          (p: Product) =>
            p.name.toLocaleLowerCase().indexOf(filterText) !== -1 ||
            p.description.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
