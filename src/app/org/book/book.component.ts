import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookEditorComponent} from '../book-editor/book-editor.component';
import {ConfirmDialogComponent, IConfirmDialogOptions} from '../../app-common/confirm-dialog/confirm-dialog.component';
import {clone} from '../../defines/common';
import {BookService} from '../services/book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Output()
  delete = new EventEmitter<IBook>();

  @Input()
  book: IBook;

  constructor(private dialog: MdDialog, private bookService: BookService) {
  }

  editBook() {
    const dialogRef = this.dialog.open(BookEditorComponent, {
      data: clone(this.book)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      Object.assign(this.book, result);
    });
  }

  deleteBook() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        msg: 'Are you sure?'
      } as IConfirmDialogOptions
    });
    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      this.bookService.deleteBook(this.book.bookId).subscribe(() => this.delete.emit(this.book));
    });
  }

  ngOnInit() {}

}
