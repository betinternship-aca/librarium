import {Component, Input, OnInit} from '@angular/core';
import {BookPreviewComponent} from '../book-preview/book-preview.component';
import {MdDialog} from '@angular/material';
import {IBook} from '../../defines/IBook';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-reserved-book',
  templateUrl: './reserved-book.component.html',
  styleUrls: ['./reserved-book.component.scss']
})
export class ReservedBookComponent implements OnInit {
  @Input()
  book: IBook;
  @Input()
  order;
  @Input()
  authors;
  @Input()
  categories;

  constructor(private dialog: MdDialog, private bookService: BookService) { }
  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.book
    });
  }
  ngOnInit() {
  }

}
