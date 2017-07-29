import * as express from 'express';
import {UserRouter} from './user';
import {BookRouter} from './book';
import {BookSeriesRouter} from './book-series';
import {LibraryRouter} from './library';

export const ApiRouter = express.Router();

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/book', BookRouter);
ApiRouter.use('/book-series', BookSeriesRouter);
ApiRouter.use('/library', LibraryRouter);

