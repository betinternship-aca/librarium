import {Component, Inject, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {
  @Input()
  inProgress = false;

  @Input()
  book;

  constructor(
    @Inject(MD_DIALOG_DATA) data: IBook,
    private dialogRef: MdDialogRef<IBook>,
    private bookService: BookService
  ) {
    this.book = data;
  }
  saveBook(data) {
    const obs = data.bookId ? this.bookService.updateBook(data) : this.bookService.createBook(data);
    this.inProgress = true;
    obs.subscribe(book => this.dialogRef.close(book));
  }

  ngOnInit() {
  }

}
