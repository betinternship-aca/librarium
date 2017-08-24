import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {IOrder} from '../../defines/IOrder';
import {IPagingData} from '../../defines/IPagingData';

export interface IPagingConfig {
  pageSize: number;
  pageIndex: number;
  pageSizeOptions: number[];
}

const setPagingConfigToParams = (config: IPagingConfig, params) => {
  return params.set('size', config.pageSize).set('index', config.pageIndex);
};

@Injectable()
export class OrderService {
  pagingConfig = {
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 20]
  } as IPagingConfig;

  constructor(private http: HttpClient) {
  }

  getOrgReservations() {
    return this.http.get(`/api/org/reserved`) as Observable<IOrder[]>;
  }

  finishOrder(orderId) {
    return this.http.get(`/api/org/return/${orderId}`) as Observable<IOrder>;
  }

  updateOrder(data) {
    return this.http.post(`/api/order/${data.orderId}`, data);
  }

  getOrgOrderHistory(search: string = '') {
    return this.http.get(`/api/org/history`, {
      params: setPagingConfigToParams(this.pagingConfig, new HttpParams().set('search', search))
    }) as Observable<IPagingData<IOrder>>;
  }

}
