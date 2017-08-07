import {Component, Inject, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {BookService} from '../services/book.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {ICategory} from '../../defines/ICategory';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.scss']
})
export class BookEditorComponent implements OnInit {
  @Input()
  inProgress = false;

  @Input()
  book;

  @Input()
  multiple;

  categories: ICategory[];


  constructor(
    @Inject(MD_DIALOG_DATA) data: IBook,
    private dialogRef: MdDialogRef<IBook>,
    private bookService: BookService,
    private categoryService: CategoryService
  ) {
    this.book = data;

    this.book.categories = this.categoryService.getAllCategories()
      .subscribe(categories => this.categories = categories as ICategory[]);
  }

  saveBook(data) {
    const obs = data.bookId ? this.bookService.updateBook(data) : this.bookService.createBook(data);
    this.inProgress = true;
    obs.subscribe(book => this.dialogRef.close(book));
  }


  ngOnInit() {
  }

}


