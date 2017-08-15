import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {BookService} from 'app/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookPreviewComponent} from '../book-preview/book-preview.component';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {IOrder} from "../../defines/IOrder";


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent implements OnInit {

  orders: IOrder[];

  constructor(private orderService: OrderService, private router: Router) {
    this.orderService.getUserReservations()
      .subscribe(orders => this.orders = orders);
  }

  ngOnInit() {
  }

}
