import {IUser} from './IUser';
import {IBook} from './IBook';

export interface IOrder {
  orderId: string;
  userId: string;
  user?: IUser;
  bookId: string;
  book?: IBook;
  orgId: string;
  orderDate: Date;
  returnDate: Date | null;
}
