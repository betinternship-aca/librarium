import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import {IOrder} from '../../defines/IOrder';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookPreviewComponent} from '../book-preview/book-preview.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  @Input()
  order: IOrder;

  book: IBook;


  constructor(private dialog: MdDialog) {
  }

  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.book
    });
  }
  ngOnInit() {
  }

}
