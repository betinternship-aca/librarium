import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserved-books',
  templateUrl: './reserved-books.component.html',
  styleUrls: ['./reserved-books.component.scss']
})
export class ReservedBooksComponent implements OnInit {
  book;

  constructor() { }

  ngOnInit() {
  }

}
