import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getUserOrders(userId) {
    return this.http.get(`/api/order/${userId}`);
  }

}
