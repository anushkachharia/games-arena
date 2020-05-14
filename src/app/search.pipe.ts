import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  public transform(data, searchText, field) {
    if (!searchText) {
      return data;
    } else {
      return data.filter(item => {
        return item[field].toLowerCase().indexOf(searchText.toLowerCase()) >= 0;
      });
    }
  }
}
