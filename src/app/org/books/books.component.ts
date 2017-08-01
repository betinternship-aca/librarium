import { Component, OnInit } from '@angular/core';
import {IBook} from '../../defines/IBook';
import {HttpClient} from '@angular/common/http';
import {MdDialog} from '@angular/material';
import {BookEditorComponent} from '../book-editor/book-editor.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books: IBook[];

  constructor(private http: HttpClient, public dialog: MdDialog) {

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

  ngOnInit() {
    this.http.get('/api/book/book-list').subscribe(data => {
      this.books = data as IBook[];
    });
  }

}
