import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Book[], filterString: string): any {
    if (value.length === 0 || !filterString) return value;

    let filteredBooks: Book[] = [];

    let lowerString = filterString.toLocaleLowerCase();

    for (let book of value) {
      if (
        book.title.toLocaleLowerCase().includes(lowerString) ||
        book.all_authors.toLocaleLowerCase().includes(lowerString)
      ) {
        filteredBooks.push(book);
      }
    }
    return filteredBooks;
  }
}
