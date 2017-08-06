import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {IBook} from '../../defines/IBook';
import {BookService} from './book.service';

@Injectable()
export class BooksResolverService implements Resolve<IBook[]> {
  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bookService.getAllBooks();
  }


}
