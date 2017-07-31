/**
 * Created by hospogh on 7/29/17.
 */

import {createGUID} from './common';
import * as express from 'express';
import {join} from 'path';
import {Book} from './book';
import {readFileSync, writeFileSync} from 'fs';

const authorFilePath = join(__dirname, 'data/authors.db.json');


export class Author {
  authorId: string = createGUID();
  name: string;
  bornDate: Date;
  deathDate?: Date;
  countryId?;

  constructor(data) {
    Object.assign(this, data);
  }

  static getAllAuthors() {
    return JSON.parse(readFileSync(authorFilePath).toString());
  }

  static getAllBooks(authorId) {
    const allBooks = Book.getAllBooks();
    return allBooks.filter(b => b.bookId === authorId);
  }

  static createAuthor(data) {
    const author = new Author(data);
    const authors = this.getAllAuthors();
    authors.push(author);
    this.saveAllAuthors(authors);
    return author;
  }

  static updateAuthor(author: Author) {
    const authors = this.getAllAuthors();
    const authorIndex = authors.findIndex(a => a.authorId === author.authorId);
    authors.spliec(authorIndex, 1, author);
    this.saveAllAuthors(authors);
    return author;
  }

  static deleteAuthor(authorId) {
    const authors = this.getAllAuthors();
    const authorIndex = authors.findIndex(a => a.authorId === authorId);
    authors.splice(authorIndex, 1);
    this.saveAllAuthors(authors);
  }

  static saveAllAuthors(authorList) {
    writeFileSync(authorFilePath, JSON.stringify(authorList, null, 2));
  }

  static getAuthor(authorId) {
    const authors = this.getAllAuthors();
    return authors.find(a => a.authorId === authorId);
  }
}

export const AuthorRouter = express.Router();

// get all authors
AuthorRouter.get('/author-list', (req, res) => {
  res.json(Author.getAllAuthors());
});

// get author
AuthorRouter.get('/authorId', (req, res) => {
  res.json(Author.getAuthor(req.params.authorId));
});

// create author
AuthorRouter.post('/', (req, res) => {
  res.json(Author.createAuthor(req.body));
});

// update author
AuthorRouter.post('/:authorId', (req, res) => {
  const data = req.body;
  data.authorId = req.params.authorId;
  res.json(Author.updateAuthor(data));
});

// delete author
AuthorRouter.delete('/:authorId', (req, res) => {
  res.json(Author.deleteAuthor(req.params.authorId));
});

