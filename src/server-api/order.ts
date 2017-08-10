/**
 * Created by hospogh on 7/29/17.
 */
import * as express from 'express';
import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {createGUID} from './common';

const ordersFilePath = join(__dirname, 'data/orders.db.json');

export class Order {
  orderId: string = createGUID();
  userId: string;
  bookId: string;
  orgId: string;
  orderDate: Date;
  returnDate: Date = null;

  constructor(data) {
    Object.assign(this, data);
  }

  static getAllOrders(): Order[] {
    return JSON.parse(readFileSync(ordersFilePath).toString());
  }

  static getOrder(orderId) {
    return Order.getAllOrders().find(o => o.orderId === orderId);
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
    const index = orders.findIndex((order) => order.orderId === orderId);
    orders.splice(index, 1);
    this.saveAllOrders(orders);
  }

  static updateOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    const index = orders.findIndex((order) => order.orderId === data.orderId);
    orders.splice(index, 1, order);
    this.saveAllOrders(orders);
    return order;
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
OrderRouter.post('/userId/', (req, res) => {
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
