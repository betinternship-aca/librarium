/**
 * Created by hospogh on 7/29/17.
 */

import {createGUID} from './common';
import * as express from 'express';
import {join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {IAuthor} from '../app/defines/IAuthor';

const authorFilePath = join(__dirname, 'data/authors.db.json');


export class Author implements IAuthor {
  authorId: string = createGUID();
  name: string;
  bornDate: Date;
  deathDate?: Date;

  constructor(data) {
    Object.assign(this, data);
  }

  static getAllAuthors() {
    return JSON.parse(readFileSync(authorFilePath).toString());
  }

  static createAuthor(data) {
    const author = new Author(data);
    const authors = this.getAllAuthors();
    authors.push(author);
    this.saveAllAuthors(authors);
    return author;
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
AuthorRouter.get('/:authorId', (req, res) => {
  res.json(Author.getAuthor(req.params.authorId));
});

// create author
AuthorRouter.post('/', (req, res) => {
  res.json(Author.createAuthor(req.body));
});


