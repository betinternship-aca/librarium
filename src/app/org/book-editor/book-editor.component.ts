import {Component, Inject, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MD_DIALOG_DATA, MdDialog} from '@angular/material';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {


  @Input()
  title: string;
  @Input()
  book;


  constructor(@Inject(MD_DIALOG_DATA) data: IBook, public dialog: MdDialog) {
    this.book = data;

    console.log(data);
  }

  ngOnInit() {
  }

}
