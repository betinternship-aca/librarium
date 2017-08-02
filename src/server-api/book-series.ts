/**
 * Created by voska_000 on 28.07.2017.
 */
import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {Book} from './book';

const filePath = join(__dirname, './data/book-series.db.json');

class BookSeries {
  bookSeriesId: string = createGUID();
  bookIds: string[]; // : Book[]
  bookSeriesName: string;
  authorIds: string[]; // : Author
  categoryIds: string[];
  language?: string;
  // countOfDownloads: number;

  constructor(data) {
    Object.assign(this, data);
  }

  static getAllBookSeries(): BookSeries[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getBookSeries(id: string): BookSeries {
    return this.getAllBookSeries().find(b => b.bookSeriesId === id);
  }

  static createBookSeries(data) {
    const bookSeries = new BookSeries(data);
    const books = this.getAllBookSeries();
    books.push(bookSeries);
    this.saveAllBookSeries(books);
    return bookSeries;
  }

  static updateBookSeries(data) {
    const books = this.getAllBookSeries();
    const booksIndex = books.findIndex(b => b.bookSeriesId === data.id);
    books.splice(booksIndex, 1, data);
    this.saveAllBookSeries(books);
    return data;
  }

  static deleteBookSeries(id) {
    const books = this.getAllBookSeries();
    const bookIndex = books.findIndex(b => b.bookSeriesId === id);
    books.splice(bookIndex, 1);
    this.saveAllBookSeries(books);
  }

  static saveAllBookSeries(bookList) {
    writeFileSync(filePath, JSON.stringify(bookList, null, 2));
  }
}

export const BookSeriesRouter = express.Router();

BookSeriesRouter.get('/book-series-list', (req, res) => {
  res.json(BookSeries.getAllBookSeries());
});

BookSeriesRouter.post('/:bookSeriesId', (req, res) => {
  res.json(BookSeries.getBookSeries(req.params.id));
});

// create book-series
BookSeriesRouter.post('/', (req, res) => {
  res.json(BookSeries.createBookSeries(req.body));
});

// update book-series
BookSeriesRouter.post('/:bookSeriesId', (req, res) => {
  const data = req.body;
  data.id = req.params.id;
  res.json(BookSeries.updateBookSeries(data));
});

// delete book-series
BookSeriesRouter.delete('/:bookSeriesId', (req, res) => {
  const id = req.params.id;
  res.json(BookSeries.deleteBookSeries(id));
});
