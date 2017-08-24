import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IOrder} from '../../defines/IOrder';
import {OrderService} from './order.service';
import {IPagingData} from '../../defines/IPagingData';

@Injectable()
export class HistoryResolverService implements Resolve<IPagingData<IOrder>> {

  constructor(private orderService: OrderService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.orderService.getOrgOrderHistory();
  }

}
