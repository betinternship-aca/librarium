import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {Router} from '@angular/router';


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {
  orders: IOrder[];
  @Input()
  disabled = false;
  @Input()
  innerText = ' Return ';

  displayedColumns = ['bookName', 'userName', 'reserveDate', 'action'];
  dataSource: OrderDataSource;

  constructor(private orderService: OrderService, private router: Router) {
    this.dataSource = new OrderDataSource(this.orderService);
  }

  ngOnInit() {
    // md-table bug workaround: https://github.com/angular/material2/issues/5593
    this.router.navigate(['org', 'home', 'reserved']);
  }

  returnBook(order: IOrder) {
    this.orderService.finishOrder(order.orderId).subscribe(() => {
      order.book.reserved = false;
    });
  }

}
export class OrderDataSource extends DataSource<IOrder> {

  constructor(private orderService: OrderService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this.orderService.getOrgReservations();
  }
  disconnect() {}
}
