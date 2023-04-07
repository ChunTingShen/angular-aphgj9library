import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksObj, Book, Author } from './book';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}

  url: string = 'https://openlibrary.org/subjects/world.json';

  getBooks() {
    return this.http.get(this.url);
  }
}
