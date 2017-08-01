import { Component, OnInit } from '@angular/core';
import {IBook} from '../../defines/IBook';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('/api/book/book-list').subscribe(data => {
      this.books = data as IBook[];
    });
  }

}
