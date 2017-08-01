import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {Order} from './order';
import {IBook} from '../app/defines/IBook';
import {Author} from './author';
import {IAuthor} from '../app/defines/IAuthor';
import {ICategory} from '../app/defines/ICategory';
import {Category} from './category';


const filePath = join(__dirname, './data/books.db.json');

export class Book implements IBook {
  bookId: string = createGUID();
  image: string; // url yet
  bookName: string;
  authorIds: string[];
  authors: IAuthor[];
  categoryIds: string[];
  categories: ICategory[];
  editionYear: Date;
  language?: string;
  price?: number;
  description: string;
  // countOfDownloads: number;

  constructor(data) {
    Object.assign(this, data);
    this.authors = this.authorIds.map(authorId => Author.getAuthor(authorId));
    this.categories = this.categoryIds.map(categoryId => Category.getCategory(categoryId));
  }

  static getAllBooks(): Book[] {
    return JSON.parse(readFileSync(filePath).toString()).map(data => new Book(data));
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

BookRouter.get('/:id/orders', (req, res) => {
  res.json(Order.getBookOrders(req.params.id));
});
