import {Component, Input} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  books: IBook[];

  @Input()
  searchContent: string;

  constructor(private bookService: BookService) {
    this.getAllBooks();
  }

  getAllBooks(content?: string) {
    if (content) {
      this.bookService.search(this.searchContent).subscribe((resBooks: IBook[]) => this.books = resBooks);
    } else {
      this.bookService.getAllBooks().subscribe((data: IBook[]) => this.books = data);
    }
  }
}
