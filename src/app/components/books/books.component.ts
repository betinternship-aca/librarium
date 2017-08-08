import {Component, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {ActivatedRoute} from '@angular/router';
import {MdDialog} from '@angular/material';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: IBook[];

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe((data: IBook[]) => this.books = data);
  }
}
