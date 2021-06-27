import { Pipe, PipeTransform } from '@angular/core';

/*
 *  Usage:
 *  List | filterValue : filterField : (object with  count as parameter. This object is used to store the list count of the filter query)
 *
 *
 */

@Pipe({
  name: 'filter',
})
export class Filter implements PipeTransform {
  transform(
    data: any[],
    author: string,
    field: string,
    filterMetaData: any
  ): any {
    if (!author) {
      filterMetaData.count = data.length;
      return data;
    }
    let newData = data.filter((x) => {
      return x?.[field] == author;
    });
    filterMetaData.count = newData.length;
    return newData;
  }
}
