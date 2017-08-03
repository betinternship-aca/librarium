import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../../defines/IBook';

@Injectable()
export class BookService {
  bookList: IBook;

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get('/api/book/book-list');
  }
  deleteBook() {
    return this.http.delete('api/book/:bookId');
  }
  createBook(data) {
    return this.http.post('/api/book/', data);
  }
  updateBook(data) {
    return this.http.post('/api/book/:bookId', data);
  }
}
