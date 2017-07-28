import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';


const filePath = join(__dirname, './data/books.db.json');

class Book {
  id: string = createGUID(); // consider using guid
  bookName: string;
  authorName: string;
  category: string;
  editionYear: Date;
  // countOfDownloads: number;

  static getAllBooks(): Book[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getBook(id: string): Book {
    return this.getAllBooks().find(u => u.id === id);
  }
}

export const BookRouter = express.Router();

BookRouter.get('/book-list', (req, res) => {
  res.json(Book.getAllBooks());
});

BookRouter.post('/:id', (req, res) => {
  res.json(Book.getBook(req.params.id));
});

