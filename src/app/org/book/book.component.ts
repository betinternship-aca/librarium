import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookEditorComponent} from '../book-editor/book-editor.component';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  books: IBook[];

  @Input()
  book: IBook;

  constructor(public dialog: MdDialog) {

  }
  editBook() {
    const dialogRef = this.dialog.open(BookEditorComponent, {
      data: {}
    });
    /*    const dialogRef = this.dialog.open(BookEditorComponent);
     dialogRef.afterClosed().subscribe(result => {
     // this.selectedOption = result;
     });*/
  }
  deleteBook() {
    const dialogRef = this.dialog.open(BookEditorComponent, {
      data: {}
    });
    /*    const dialogRef = this.dialog.open(BookEditorComponent);
     dialogRef.afterClosed().subscribe(result => {
     // this.selectedOption = result;
     });*/
  }

  ngOnInit() {
  }

}
