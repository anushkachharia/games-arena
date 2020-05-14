import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {
  public transform(items, type, order) {
    return items.sort((a, b) => {
      if (a[type].toString().toLowerCase() < b[type].toString().toLowerCase()) {
        return order === 'ascending' ? -1 : 1;
      } else {
        return order === 'ascending' ? 1 : -1;
      }
    });
  }
}

