import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {ActivatedRoute, Router} from '@angular/router';
import {MdPaginator, PageEvent} from '@angular/material';
import {OrderService} from '../services/order.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IPagingData} from '../../defines/IPagingData';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @ViewChild('search')
  search: ElementRef;

  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  get pagingConfig() {
    return this.orderService.pagingConfig;
  }

  orders: IOrder[];
  displayedColumns = ['bookName', 'userName', 'reserveDate', 'returnDate'];
  dataSource: OrderDataSource;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.router.navigate(['org', 'home', 'history']);

    const elem = this.search.nativeElement;
    const searchChange = Observable.fromEvent(elem, 'input')
      .debounceTime(150)
      .distinctUntilChanged()
      .map(() => elem.value);

    this.dataSource = new OrderDataSource(
      this.activatedRoute,
      searchChange,
      this.orderService,
      this.paginator
    );
  }

}

export class OrderDataSource extends DataSource<IOrder> {
  orderSubject = new BehaviorSubject<IPagingData<IOrder>>(null);
  searchValue = '';

  get totalCount() {
    return this.orderSubject.value.totalCount;
  }

  constructor(activatedRoute: ActivatedRoute,
              searchChange: Observable<string>,
              private orderService: OrderService,
              paginator: MdPaginator) {
    super();
    const {orderSubject} = this;

    activatedRoute.data
      .subscribe((resolvedData: { orders: IPagingData<IOrder> }) => orderSubject.next(resolvedData.orders));

    searchChange.subscribe(value => {
      this.searchValue = value;
      this.updateOrders();
    });

    paginator.page.subscribe((pageEvent: PageEvent) => {
      orderService.pagingConfig.pageSize = pageEvent.pageSize;
      orderService.pagingConfig.pageIndex = pageEvent.pageIndex;
      this.updateOrders();
    });
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect() {
    return this.orderSubject.map(pagingData => pagingData.data);
  }

  disconnect() {
  }

  updateOrders() {
    this.orderService.getOrgOrderHistory(this.searchValue)
      .subscribe(data => this.orderSubject.next(data));
  }
}
