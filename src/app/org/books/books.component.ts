import { Component, OnInit } from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookEditorComponent} from '../book-editor/book-editor.component';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[];

  constructor(private bookService: BookService, public dialog: MdDialog) {
    this.getAllBooks();
  }

  addBook() {
    const dialogRef = this.dialog.open(BookEditorComponent, {
      data: {}
    });
/*    const dialogRef = this.dialog.open(BookEditorComponent);
    dialogRef.afterClosed().subscribe(result => {
      // this.selectedOption = result;
    });*/
  }
  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(data => this.books = data as IBook[]);
  }
  deleteBook() {
    this.bookService.deleteBook();
  }

  ngOnInit() {
  }

}
