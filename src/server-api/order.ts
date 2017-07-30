/**
 * Created by hospogh on 7/29/17.
 */
import * as express from 'express';
import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {createGUID} from './common';

const ordersFilePath = join(__dirname, 'data/orders.db.json');
// const booksFilePath = join(__dirname, 'data/books.db.json');
// const usersFilePath = join(__dirname, 'data/users.db.json');

export class Order {
  orderId: string = createGUID();
  userId: string;
  bookId: string;
  orderDate: Date;
  orderDays: number;

  constructor(data) {
    Object.assign(this, data);

    const nowDate: Date = new Date();
    const date: Date = this.orderDate;
    const days: number = this.orderDays;

    this.orderDate = date && nowDate.valueOf() < date.valueOf() ? date : nowDate;
    this.orderDays = days && days > 0 ? days : 30;
  }


  static getOrder(orderId) {
    return Order.getAllOrders().find(o => o.orderId === orderId && o.orderId === orderId);
  }

  static getOrderIndex(orderId) {
    return Order.getAllOrders().findIndex(o => o.orderId === orderId);
  }

  static getAllOrders(): Order[] {
    return JSON.parse(readFileSync(ordersFilePath).toString());
  }

  static getUserOrders(userId): Order[] {
    return Order.getAllOrders().filter(o => o.userId === userId);
  }

  static getBookOrders(bookId): Order[] {
    return Order.getAllOrders().filter(o => o.bookId === bookId);
  }

  static saveAllOrders(ordersList) {
    writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2));
  }

  static createOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    orders.push(order);
    this.saveAllOrders(orders);
    return order;
  }

  static deleteOrder(orderId) {
    const orders = this.getAllOrders();
    const index = this.getOrderIndex(orderId);
    orders.splice(index, 1);
    this.saveAllOrders(orders);
  }

  static updateOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    const index = this.getOrderIndex(data.orderId);
    orders.splice(index, 1, order);
    this.saveAllOrders(orders);
    return data;
  }
}

export const OrderRouter = express.Router();

OrderRouter.get('/order-list', (req, res) => {
  res.json(Order.getAllOrders());
});

OrderRouter.get('/:orderId', (req, res) => {
  res.json(Order.getOrder(req.params.orderId));
});

// create order
OrderRouter.post('/', (req, res) => {
  res.json(Order.createOrder(req.body));
});

// update order
OrderRouter.post('/:orderId', (req, res) => {
  const data = req.body;
  data.orderId = req.prams.orderId;
  res.json(Order.updateOrder(data));
});

// delete order
OrderRouter.delete('/:orderId', (req, res) => {
  res.json(Order.deleteOrder(res.params.orderId));
});
