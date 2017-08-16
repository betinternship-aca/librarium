import { Component, OnInit } from '@angular/core';
import {IOrder} from "../../defines/IOrder";
import {OrderService} from '../services/order.service';
import {DataSource} from "@angular/cdk";
import {Router} from "@angular/router";


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  orders: IOrder[];
  displayedColumns = ['bookName', 'userName', 'reserveDate', 'returnDate'];
  dataSource: OrderDataSource;

  constructor(private  orderService: OrderService,private router: Router) {
    this.dataSource = new OrderDataSource(this.orderService);

    ;
  }

  ngOnInit() {
    this.router.navigate(['org', 'home', 'history']);
  }

}
export class OrderDataSource extends DataSource<IOrder> {

  constructor(private orderService: OrderService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this.orderService.getOrgOrderHistory();
  }
  disconnect() {}
}
