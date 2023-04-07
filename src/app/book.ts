export interface BooksObj {
  key: string;
  name: string;
  works: Book[];
}

export interface Book {
  all_authors: string;
  authors: Author[];
  title: string;
}

export interface Author {
  key: string;
  name: string;
}
