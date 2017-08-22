import {Component, Inject, Input} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MD_DIALOG_DATA} from '@angular/material';
import {ICategory} from '../../defines/ICategory';
import {IAuthor} from '../../defines/IAuthor';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input()
  book;
  category: ICategory[];
  author: IAuthor[];
  constructor(@Inject(MD_DIALOG_DATA) data: IBook) {
    this.book = data;
  }
}
