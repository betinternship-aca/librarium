import {Component, Input} from '@angular/core';
import {IOrder} from '../../defines/IOrder';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookPreviewComponent} from 'app/components/book-preview/book-preview.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  @Input()
  isReservation = false;

  @Input()
  order: IOrder;

  book: IBook;

  constructor(private dialog: MdDialog) {
  }

  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.order.book,
      height: '520px',
      width: '400px'
    });
  }
}
