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
  orgId: string;
  editionYear: Date;
  language?: string;
  description: string;
  count: number;
  price: number;

  constructor(data) {
    Object.assign(this, data);
    // this.authors = this.authorIds.map(authorId => Author.getAuthor(authorId));
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
    books.splice(bookIndex, 1, this.clearBookData(data));
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

  static clearBookData(data: IBook) {
    delete data.categories;
    delete data.authors;
    return data;
  }

  static search(content: string) {
    content = content.toString().toLowerCase();
    const books = Book.getAllBooks();
    return books.filter(book => {
      return book.bookName.toLowerCase().includes(content)
        || book.description.toLowerCase().includes(content)
        || book.categories.some(c => c.name.toLowerCase().includes(content));
      // || book.authors.some(a => a.name.toLowerCase().includes(content));
    });
  }
}

export const BookRouter = express.Router();

BookRouter.get('/book-list', (req, res) => {
  res.json(Book.getAllBooks());
});

BookRouter.post('/book-search', (req, res) => {
  res.json(Book.search(req.body.content)); console.log(req.body);
});

BookRouter.get('/:bookId', (req, res) => {
  res.json(Book.getBook(req.params.bookId));
});

// create book
BookRouter.post('/', (req, res) => {
  res.json(Book.createBook(req.body));
});

// update book
BookRouter.post('/:bookId', (req, res) => {
  const data = req.body;
  data.id = req.params.bookId;
  res.json(Book.updateBook(data));
});

// delete book
BookRouter.delete('/:bookId', (req, res) => {
  const id = req.params.bookId;
  res.json(Book.deleteBook(id));
});

BookRouter.get('/:bookId/orders', (req, res) => {
  res.json(Order.getBookOrders(req.params.bookId));
});
