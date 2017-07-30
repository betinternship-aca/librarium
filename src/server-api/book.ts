import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';


const filePath = join(__dirname, './data/books.db.json');

export class Book {
  bookId: string = createGUID();
  bookName: string;
  authorName: string; // : Author
  categoryIds: string;
  editionYear: Date;
  language?: string;
  // countOfDownloads: number;

  constructor(data) {
    Object.assign(this, data);
  }

  static getAllBooks(): Book[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getBook(id: string): Book {
    return this.getAllBooks().find(b => b.bookId === id);
  }

  static createBook(data) {
    const book = new Book(data);
    const books = this.getAllBooks();
    books.push(book);
    this.saveAllBooks(books);
    return book;
  }

  static updateBook(data) {
    const books = this.getAllBooks();
    const bookIndex = books.findIndex(b => b.bookId === data.id);
    books.splice(bookIndex, 1, data);
    this.saveAllBooks(books);
    return data;
  }

  static deleteBook(id) {
    const books = this.getAllBooks();
    const bookIndex = books.findIndex(b => b.bookId === id);
    books.splice(bookIndex, 1);
    this.saveAllBooks(books);
  }

  static saveAllBooks(bookList) {
    writeFileSync(filePath, JSON.stringify(bookList, null, 2));
  }
}

export const BookRouter = express.Router();

BookRouter.get('/book-list', (req, res) => {
  res.json(Book.getAllBooks());
});

BookRouter.post('/:countryId', (req, res) => {
  res.json(Book.getBook(req.params.id));
});

// create book
BookRouter.post('/', (req, res) => {
  res.json(Book.createBook(req.body));
});

// update book
BookRouter.post('/:countryId', (req, res) => {
  const data = req.body;
  data.id = req.params.id;
  res.json(Book.updateBook(data));
});

// delete book
BookRouter.delete('/:countryId', (req, res) => {
  const id = req.params.id;
  res.json(Book.deleteBook(id));
});
