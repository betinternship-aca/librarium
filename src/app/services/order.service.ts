import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {IOrder} from '../defines/IOrder';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }
  getUserOrders() {
    return this.http.get(`/api/user/history`) as Observable<IOrder[]>;
  }

  getUserReservations() {
    return this.http.get(`/api/order/reserved`) as Observable<IOrder[]>;
  }
}
