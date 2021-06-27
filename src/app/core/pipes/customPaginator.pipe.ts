import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompaginator',
})
export class CustomPaginatorPipe implements PipeTransform {
  itemsPerPage: number = 5;

  transform(data: any[], currentPage: number): any {
    return data.slice(
      (currentPage - 1) * this.itemsPerPage,
      this.itemsPerPage + (currentPage - 1) * this.itemsPerPage
    );
  }
}
