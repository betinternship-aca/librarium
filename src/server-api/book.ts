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
import {Organization} from './organization';
import {User} from './user';


const filePath = join(__dirname, './data/books.db.json');

export class Book implements IBook {
  bookId: string = createGUID();
  image: string; // url yet
  bookName: string;
  authorIds: string[] = [];
  authors: IAuthor[];
  categoryIds: string[];
  categories: ICategory[];
  orgId: string;
  editionYear: Date;
  language?: string;
  description: string;
  reserved = false;

  constructor(data) {
    Object.assign(this, data);
    this.authors = this.authorIds.map(authorId => Author.getAuthor(authorId));
    this.categories = this.categoryIds.map(categoryId => Category.getCategory(categoryId));
  }

  static getAllBooks(): Book[] {
    return JSON.parse(readFileSync(filePath).toString()).map(data => new Book(data));
  }

  static getBook(bookId: string): Book {
    return this.getAllBooks().find(b => b.bookId === bookId);
  }

  static createBook(data) {
    data.orgId = Organization.loggedInOrg.orgId;
    const book = new Book(data);
    const books = this.getAllBooks();
    books.push(book);
    this.saveAllBooks(books);
    return book;
  }

  static updateBook(data) {
    const books = this.getAllBooks();
    const bookIndex = books.findIndex(b => b.bookId === data.bookId);
    books.splice(bookIndex, 1, this.clearBookData(data));
    this.saveAllBooks(books);
    return new Book(data);
  }

  static deleteBook(bookId) {
    const books = this.getAllBooks();
    const bookIndex = books.findIndex(b => b.bookId === bookId);
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

  static reserveBook(bookId: string) {
    const current = this.getBook(bookId);

    current.reserved = true;
    Book.updateBook(current);
    Order.createOrder({
      bookId,
      userId: User.loggedInUser.userId,
      orderDate: new Date(),
      orgId: current.orgId
    });
  }

  static search(content: string) {
    const words = content.toString().toLowerCase().trim().split(/\s+/);
    const books = Book.getAllBooks();
    return books.filter(book => {
      return words.some(w => {
        return book.bookName.toLowerCase().includes(w)
          || book.description.toLowerCase().includes(w)
          || book.authors.some(a => a.name.toLowerCase().includes(w))
          || book.categories.some(c => c.name.toLowerCase().includes(w));
      });
    });
  }
}

export const BookRouter = express.Router();

BookRouter.get('/book-list', (req, res) => {
  res.json(Book.getAllBooks());
});

BookRouter.post('/book-search', (req, res) => {
  res.json(Book.search(req.body.content));
});

BookRouter.get('/reserve/:bookId', (req, res) => {
  res.json(Book.reserveBook(req.params.bookId));
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
  data.bookId = req.params.bookId;
  res.json(Book.updateBook(data));
});

// delete book
BookRouter.delete('/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  res.json(Book.deleteBook(bookId));
});

