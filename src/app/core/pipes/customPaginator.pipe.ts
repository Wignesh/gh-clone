import { Pipe, PipeTransform } from '@angular/core';

/*
 *  Usage:
 *  list | custompaginator : currentPgNo : itemsPerPageToDisplay
 */

@Pipe({
  name: 'custompaginator',
})
export class CustomPaginatorPipe implements PipeTransform {
  transform(data: any[], currentPage: number, itemsPerPage: number): any {
    return data.slice(
      (currentPage - 1) * itemsPerPage,
      itemsPerPage + (currentPage - 1) * itemsPerPage
    );
  }
}
