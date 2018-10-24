import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SearchFilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: Array<string>, query: string) {

    if (!items) {
      return [];
    }

    if (!query) {
      return items;
    }

    let searchText = query.toLowerCase();

    return items.filter((item) => {
      return item.toLowerCase().includes(searchText);
    });

  }
}
