import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../../defines/IBook';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get(`/api/org/books`) as Observable<IBook[]>;
  }
  deleteBook(bookId) {
    return this.http.delete(`api/book/${bookId}`);
  }
  createBook(data) {
    return this.http.post(`/api/book/`, data);
  }
  updateBook(data) {
    return this.http.post(`/api/book/${data.bookId}`, data);
  }
}
