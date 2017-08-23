import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IOrder} from '../../defines/IOrder';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  orders: IOrder[];

  constructor(private activatedRouter: ActivatedRoute) {
    this.activatedRouter.data
      .subscribe((resData: { history: IOrder[] }) => this.orders = resData.history);
  }
}
