import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {OrderService} from '../../services/order.service';
import {IBook} from '../../defines/IBook';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: IOrder[];

  constructor(private orderService: OrderService, private router: Router) {
    this.orderService.getUserOrders().subscribe((orders) => this.orders = orders);
  }

  ngOnInit() {}
}
