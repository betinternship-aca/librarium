import { Component, OnInit } from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookEditorComponent} from '../book-editor/book-editor.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[];

  constructor(private activatedRoute: ActivatedRoute, public dialog: MdDialog) {
    this.getAllBooks();
  }

  addBook() {
    const dialogRef = this.dialog.open(BookEditorComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(book => book && this.books.unshift(book));
  }
  getAllBooks() {
    this.activatedRoute.data
      .subscribe((data: {books: IBook[]}) => this.books = data.books);
  }
  deleteBook(book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }
  saveBook(book) {
    this.books.splice(0, 0, book);
  }

  ngOnInit() {
  }

}
