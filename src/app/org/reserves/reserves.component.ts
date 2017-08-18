import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../services/order.service';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {ActivatedRoute, Router} from '@angular/router';
import {MdDialog} from '@angular/material';


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

  constructor(private activatedRoute: ActivatedRoute,
              public dialog: MdDialog,
              private router: Router,
              private orderService: OrderService) {
    this.dataSource = new OrderDataSource(this.activatedRoute);
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

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this.activatedRoute.data.map((resolvedData: { reservations: IOrder[] }) => resolvedData.reservations);
  }

  disconnect() {
  }
}
