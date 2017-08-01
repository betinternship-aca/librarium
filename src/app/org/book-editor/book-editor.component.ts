import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  book: IBook;

  constructor() { }

  ngOnInit() {
  }

}
