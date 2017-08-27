import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {OrderService} from '../services/order.service';
import {IOrder} from '../../defines/IOrder';
import {DataSource} from '@angular/cdk';
import {ActivatedRoute, Router} from '@angular/router';
import {MdDialog, MdPaginator, PageEvent} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {IPagingData} from '../../defines/IPagingData';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {
  @Input()
  disabled = false;
  @Input()
  innerText = 'Return';

  @ViewChild('search')
  search: ElementRef;

  @ViewChild(MdPaginator)
  paginator: MdPaginator;

  get pagingConfig() {
    return this.orderService.pagingConfig;
  }

  displayedColumns = ['bookName', 'userName', 'reserveDate', 'action'];
  dataSource: OrderDataSource;

  constructor(private activatedRoute: ActivatedRoute,
              public dialog: MdDialog,
              private router: Router,
              private orderService: OrderService) { }

  ngOnInit() {
    // md-table bug workaround: https://github.com/angular/material2/issues/5593
    this.router.navigate(['org', 'home', 'reserved']);

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

  returnBook(order: IOrder) {
    this.orderService.finishOrder(order.orderId).subscribe(() => {
      order.book.reserved = false;
    });
  }
}

export class OrderDataSource extends DataSource<IOrder> {
  reservationSubject = new BehaviorSubject<IPagingData<IOrder>>(null);
  searchValue = '';

  get totalCount() {
    return this.reservationSubject.value.totalCount;
  }

  constructor(private activatedRoute: ActivatedRoute,
              searchChange: Observable<string>,
              private orderService: OrderService,
              paginator: MdPaginator) {
    super();
    const {reservationSubject} = this;

    activatedRoute.data
      .subscribe((resolvedData: { reservations: IPagingData<IOrder> }) => reservationSubject.next(resolvedData.reservations));

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
      return this.reservationSubject.map(pagingData => pagingData.data);
  }

  disconnect() { }
  updateOrders() {
    this.orderService.getOrgReservations(this.searchValue)
      .subscribe(data => this.reservationSubject.next(data));
  }
}

