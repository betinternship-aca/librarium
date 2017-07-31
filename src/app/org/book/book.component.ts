import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: IBook;

  constructor() {  }

  ngOnInit() {
  }

}
