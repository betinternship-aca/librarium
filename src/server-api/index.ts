import * as express from 'express';
import {UserRouter} from './user';
import {BookRouter} from './book';
import {OrganizationRouter} from './organization';
import {OrderRouter} from './order';
import {CountryRouter} from './country';
import {CategoryRouter} from './category';
import {AuthorRouter} from './author';

export const ApiRouter = express.Router();

ApiRouter.use('/user', UserRouter);
ApiRouter.use('/book', BookRouter);
ApiRouter.use('/org', OrganizationRouter);
ApiRouter.use('/order', OrderRouter);
ApiRouter.use('/country', CountryRouter);
ApiRouter.use('/category', CategoryRouter);
ApiRouter.use('/author', AuthorRouter);

ApiRouter.use((req, res, next) => {
  res.status(404).end();
});
