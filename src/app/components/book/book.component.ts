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

  constructor(private dialog: MdDialog,
              private bookService: BookService,
              private userService: UserService,
              private router: Router) {
    this.userService.isLoggedIn().subscribe(loggedIn => this.loggedIn = loggedIn);
  }

  private reserveBook() {
    this.bookService.reserve(this.book.bookId).subscribe(() => this.book.reserved = true);
  }

  reserve() {
    if (this.loggedIn) {
      this.reserveBook();
    } else {
      const dialogRef = this.dialog.open(UserLoginPageComponent);
      this.router.navigate(['', {outlets: {account: ['login']}}]);
      dialogRef.afterClosed()
        .subscribe(() => this.loggedIn && this.reserveBook());
    }
  }

  createPreview() {
    const dialogRef = this.dialog.open(BookPreviewComponent, {
      data: this.book,
      height: '500px',
      width: '350px'
    });
  }

  ngOnInit() {
  }

}
