import {Component} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Router} from '@angular/router';
import {IOrder} from '../../defines/IOrder';


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent {
  orders: IOrder[];

  constructor(private orderService: OrderService, private router: Router) {
    this.orderService.getUserReservations()
      .subscribe(orders => this.orders = orders);
  }
}
