/**
 * Created by hospogh on 7/29/17.
 */
import * as express from 'express';
import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {createGUID} from './common/index';

const ordersFilePath = join(__dirname, 'data/orders.db.json');
// const booksFilePath = join(__dirname, 'data/books.db.json');
// const usersFilePath = join(__dirname, 'data/users.db.json');

export class Order {
  orderId: string = createGUID();
  userId: string;
  bookId: string;
  orderDate?: Date;
  orderLimit?: number; // orderLimit or orderLimitInDays
  // or orderStartDate and orderEndDate ??
  // ??? orderLibrary: Library;

  constructor({userId, bookId, orderDate, orderLimit}) {
    if (userId) {
      this.userId = userId;
    }
    if (bookId) {
      this.bookId = bookId;
    }

    const nowDate = new Date();
    this.orderDate = orderDate && nowDate.valueOf() < orderDate.valueOf() ? orderDate : nowDate;

    this.orderLimit = orderLimit && orderLimit > 0 ? Number.parseInt(orderLimit) : 30;
  }


  static getOrder = (userId, bookId) => Order.getAllOrders().find(o => o.userId === userId && o.bookId === bookId);

  static getOrderIndex = (userId, bookId) => Order.getAllOrders().findIndex(o => o.userId === userId && o.bookId === bookId);

  static getAllOrders = (): Order[] => JSON.parse(readFileSync(ordersFilePath).toString());

  static getUserOrders = (userId: string): Order[] => Order.getAllOrders().filter(o => o.userId === userId);

  static getBookOrders = (bookId: string): Order[] => Order.getAllOrders().filter(o => o.bookId === bookId);

  static saveAllOrders = ordersList => writeFileSync(ordersFilePath, JSON.stringify(ordersList, null, 2));

  static createOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    orders.push(order);
    this.saveAllOrders(orders);
    return order;
  }

  static deleteOrder(userId, bookId) {
    const orders = this.getAllOrders();
    const index = this.getOrderIndex(userId, bookId);
    orders.splice(index, 1);
    this.saveAllOrders(orders);
  }

  static updateOrder(data) {
    const order = new Order(data);
    const orders = this.getAllOrders();
    const index = this.getOrderIndex(data.userId, data.bookId);
    orders.splice(index, 1, order);
    this.saveAllOrders(orders);
    return data;
  }
}

export const OrderRouter = express.Router();

OrderRouter.get('/all-orders', (req, res) => res.json(Order.getAllOrders()));
OrderRouter.post('/book-orders/:id', (req, res) => res.json(Order.getBookOrders(req.params.id)));
OrderRouter.post('/user-orders/:id', (req, res) => res.json(Order.getUserOrders(req.params.id)));
