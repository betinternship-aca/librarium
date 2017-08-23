import { Component, OnInit } from '@angular/core';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: IOrder[];
  displayedColumns = ['bookName', 'userName', 'reserveDate', 'returnDate'];
  dataSource: OrderDataSource;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.dataSource = new OrderDataSource(this.activatedRoute);
  }

  ngOnInit() {
    this.router.navigate(['org', 'home', 'history']);
  }

}
export class OrderDataSource extends DataSource<IOrder> {

  constructor(private activatedRoute: ActivatedRoute) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this.activatedRoute.data.map((resolvedData: { orders: IOrder[] }) => resolvedData.orders);
  }
  disconnect() {}
}
