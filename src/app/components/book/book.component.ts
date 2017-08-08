import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: IBook;

  constructor(/*private dialog: MdDialog, private bookService: BookService*/) {
  }

  ngOnInit() {
  }

}
