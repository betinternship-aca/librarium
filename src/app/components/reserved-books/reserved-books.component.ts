import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IOrder} from '../../defines/IOrder';


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent {
  orders: IOrder[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data
      .subscribe((data: {orders: IOrder[]}) => this.orders = data.orders);
  }
}
