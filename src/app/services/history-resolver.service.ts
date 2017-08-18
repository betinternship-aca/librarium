import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IOrder} from '../defines/IOrder';
import {OrderService} from './order.service';

@Injectable()
export class HistoryResolverService implements Resolve<IOrder[]> {
  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.orderService.getUserOrders();
  }
}
