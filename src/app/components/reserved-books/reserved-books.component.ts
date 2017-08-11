import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {BookService} from 'app/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent implements OnInit {
  @Input()
  order;
  @Input()
  user;
  info;
  constructor(activatedRoute: ActivatedRoute, private orderService: OrderService, private bookService: BookService) {
    activatedRoute.params
      .map(params => params.id)
      .subscribe(id => this.info = orderService.getUserOrders(id));
  }

  userReserved(userId) {
    this.orderService.getUserOrders(this.user.userId).subscribe(() => this.order.returnDate === null);
  }


  ngOnInit() {
  }

}
