import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookService} from '../../services/book.service';
import {BookPreviewComponent} from '../book-preview/book-preview.component';
import {clone} from '../../defines/common';
import {UserLoginComponent} from '../user-login/user-login.component';
import {UserService} from '../../services/user.service';
import {UserLoginPageComponent} from '../user-login-page/user-login-page.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input()
  book: IBook;

  constructor(private dialog: MdDialog, private bookService: BookService, private userService: UserService) {
  }

  reserve() {
    const isLoggedIn = this.userService.isLoggedIn().subscribe((reqData) => {
      if (reqData) {
        this.bookService.reserve(this.book.bookId).subscribe(() => this.book.reserved = true);
      } else {
        this.dialog.open(UserLoginPageComponent);
      }
    });
  }

  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.book
    });
  }

  ngOnInit() {
  }

}
