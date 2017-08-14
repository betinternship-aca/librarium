import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {IOrder} from '../../defines/IOrder';
import {BookService} from './book.service';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient, private bookService: BookService) { }

  getOrgReservations() {
    return this.http.get(`/api/org/reserved`) as Observable<IOrder[]>;
  }

  finishOrder(orderId) {
    return this.http.get(`/api/org/return/${orderId}`) as Observable<IOrder>;
  }

  updateOrder(data) {
    return this.http.post(`/api/order/${data.orderId}`, data);
  }
}
