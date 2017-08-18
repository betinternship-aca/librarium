import { Injectable } from '@angular/core';
import {BookService} from './book.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable()
export class BooksResolverService {

  constructor(private bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.bookService.getAllBooks();
  }

}
