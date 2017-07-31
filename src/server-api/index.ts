import * as express from 'express';
import {UserRouter} from './user';
import {BookRouter} from './book';
import {BookSeriesRouter} from './book-series';
import {OrganizationRouter} from './organization';
import {OrderRouter} from './order';
import {CountryRouter} from './country';

export const ApiRouter = express.Router();

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/book', BookRouter);
ApiRouter.use('/book-series', BookSeriesRouter);
ApiRouter.use('/library', OrganizationRouter);
ApiRouter.use('/order', OrderRouter);
ApiRouter.use('/country', CountryRouter);
