/**
 * Created by hospogh on 7/29/17.
 */
import * as express from 'express';
import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {createGUID} from './common';
import {Organization} from './organization';
import {IOrder} from 'app/defines/IOrder';
import {IUser} from '../app/defines/IUser';
import {IBook} from '../app/defines/IBook';
import {Book} from './book';
import {User} from './user';
import {IPagingData} from '../app/defines/IPagingData';

interface IOrderSearchCriteria {
  search: string;
  size: number;
  index: number;
}

const ordersFilePath = join(__dirname, 'data/orders.db.json');

export class Order implements IOrder {
  orderId: string = createGUID();
  userId: string;
  user: IUser;
  bookId: string;
  book: IBook;
  orgId: string;
  orderDate: Date;
  returnDate: Date = null;

  constructor(data) {
    Object.assign(this, data);

    this.book = Book.getBook(this.bookId) as IBook;
    this.user = User.getUser(this.userId);
  }

  static getAllOrders(): Order[] {
    return JSON.parse(readFileSync(ordersFilePath).toString());
  }

  static getOrder(orderId) {
    return Order.getAllOrders().find(o => o.orderId === orderId);
  }

  static getOrgOrders(): Order[] {
    return Order.getAllOrders().filter(order => order.orgId === Organization.loggedInOrg.orgId)
      .map(data => new Order(data));
  }

  static getOrgOrderHistory(criteria: IOrderSearchCriteria) {
    const filteredOrders = Order.getOrgOrders().filter(order => order.returnDate !== null
      && order.book.bookName.toLowerCase().includes(criteria.search.toLowerCase())
    );

    const result = {
      totalCount: filteredOrders.length
    } as IPagingData<Order>;

    criteria.size = +criteria.size;

    const offset = criteria.index * criteria.size || 0;
    result.data = filteredOrders.slice(offset, offset + criteria.size);

    return result;
  }

  static getOrgReservations(criteria: IOrderSearchCriteria) {
    const filteredOrders = Order.getOrgOrders().filter(order => order.returnDate === null
      && order.book.bookName.toLowerCase().includes(criteria.search.toLowerCase())
    );

    const result = {
      totalCount: filteredOrders.length
    } as IPagingData<Order>;

    const size = +criteria.size;

    const offset = criteria.index * size || 0;
    result.data = filteredOrders.slice(offset, offset + size);

    return result;
  }

  static getUserOrders(): Order[] {
    return Order.getAllOrders()
      .filter(order => order.userId === User.loggedInUser.userId)
      .map(data => new Order(data));
  }

  static getUserReservations(): Order[] {
    return Order.getUserOrders().filter(order => order.returnDate === null);
  }

  static getUserOrderHistory(): Order[] {
    return Order.getUserOrders().filter(order => order.returnDate !== null);
  }

  static saveAllOrders(ordersList) {
    writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2));
  }

  static clearData(order) {
    delete order.book;
    delete order.user;
    return order;
  }

  static createOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    orders.push(Order.clearData(order));
    this.saveAllOrders(orders);
    return order;
  }

  static updateOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    const index = orders.findIndex((order) => order.orderId === data.orderId);
    orders.splice(index, 1, Order.clearData(order));
    this.saveAllOrders(orders);
    return order;
  }

  static finishOrder(orderId: string) {
    const current = this.getOrder(orderId);
    current.returnDate = new Date();
    const book = Book.getBook(current.bookId);
    book.reserved = false;
    Book.updateBook(book);
    this.updateOrder(current);
    return current;
  }
}

export const OrderRouter = express.Router();

OrderRouter.get('/reserved', (req, res) => {
  res.json(Order.getUserReservations());
});

// create order
OrderRouter.post('/userId/', (req, res) => {
  res.json(Order.createOrder(req.body));
});

OrderRouter.get('/:orderId', (req, res) => {
  res.json(Order.getOrder(req.params.orderId));
});

// update order
OrderRouter.post('/:orderId', (req, res) => {
  const data = req.body;
  data.orderId = req.prams.orderId;
  res.json(Order.updateOrder(data));
});

