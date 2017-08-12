import {Component, Input, OnInit} from '@angular/core';
import {OrderService} from '../../services/order.service';
import {BookService} from 'app/services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookPreviewComponent} from '../book-preview/book-preview.component';
import {IBook} from '../../defines/IBook';
import {MdDialog} from '@angular/material';


@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent implements OnInit {
  @Input()
  order;
  @Input()
  user;
  info;
  @Input()
  books;
  constructor(private orderService: OrderService, private router: Router) {}

  userReserved(userId) {
    this.orderService.getUserOrders(userId)
      .subscribe(() => this.router.navigate(['/api/user/reserved']));
  }

  ngOnInit() {
  }

}
