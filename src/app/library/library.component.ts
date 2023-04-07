import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { BooksObj, Book, Author } from '../book';
import { debounceTime, filter, map, tap } from 'rxjs/operators';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
})
export class LibraryComponent implements OnInit {
  constructor(private book: BookService) {}

  booksArray: Book[];
  searchText: string = '';
  selectedBook: Book = {
    all_authors: '',
    title: '',
    authors: null,
  };

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.book.getBooks().subscribe((res: BooksObj) => {
      let newBooks = res.works.map((item) => {
        let allNames = item.authors.map(function (names) {
          return names.name;
        });
        item.all_authors = allNames.toString();
      });

      this.booksArray = res.works;
    });
  }

  onSelect(select: Book) {
    // console.log(select);
    this.selectedBook.title = select.title;
    this.selectedBook.authors = select.authors;
    this.selectedBook.all_authors = select.all_authors;
  }

  onSearch() {
    let searchWords = this.searchText.toLocaleLowerCase();

    this.book.getBooks().subscribe((res: BooksObj) => {
      let newBooks = res.works.map((item) => {
        let allNames = item.authors.map(function (names) {
          return names.name;
        });
        item.all_authors = allNames.toString();
      });

      this.booksArray = res.works.filter((it) => {
        return (
          it.title.toLocaleLowerCase().includes(searchWords) ||
          it.all_authors.toLocaleLowerCase().includes(searchWords)
        );
      });
    });
  }
}
