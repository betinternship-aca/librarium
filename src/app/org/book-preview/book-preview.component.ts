import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {IAuthor} from '../../defines/IAuthor';
import {ICategory} from '../../defines/ICategory';

@Component({
  selector: 'app-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  @Input()
  book: IBook;
  @Input()
  author: IAuthor;
  @Input()
  category: ICategory;

  constructor() { }

  ngOnInit() {
  }

}
