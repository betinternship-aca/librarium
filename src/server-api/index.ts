import * as express from 'express';
import {UserRouter} from './user';
import {BookRouter} from './book';
import {OrderRouter} from './order';

export const ApiRouter = express.Router();

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/book', BookRouter);
ApiRouter.use('/order', OrderRouter);
