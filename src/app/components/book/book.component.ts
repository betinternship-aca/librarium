import {Component, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';
import {BookService} from '../../services/book.service';
import {BookPreviewComponent} from '../book-preview/book-preview.component';
import {UserService} from '../../services/user.service';
import {UserLoginPageComponent} from '../user-login-page/user-login-page.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  private loggedIn = false;

  @Input()
  book: IBook;

  constructor(private dialog: MdDialog, private bookService: BookService, private userService: UserService, private router: Router) {
    this.userService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  reserve() {
    if (this.loggedIn) {
      this.bookService.reserve(this.book.bookId).subscribe(() => this.book.reserved = true);
    } else {
      this.dialog.open(UserLoginPageComponent);
      this.router.navigate(['', {outlets: {account: ['login']}}]);
    }
  }

  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.book
    });
  }

  ngOnInit() {
  }

}
