import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  @Input()
  book: IBook;

  constructor() { }

  ngOnInit() {
  }

}
