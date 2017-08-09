import {Component, Inject, Input, OnInit} from '@angular/core';
import {IBook} from '../../defines/IBook';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {BookService} from '../services/book.service';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {ICategory} from '../../defines/ICategory';
import {CategoryService} from '../services/category.service';
import {IAuthor} from '../../defines/IAuthor';
import {AuthorService} from '../services/author.service';
import {AuthorCreateComponent} from '../author-create/author-create.component';

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
  authors: IAuthor[];


  constructor(
    @Inject(MD_DIALOG_DATA) data: IBook,
    private dialog: MdDialog,
    private dialogRef: MdDialogRef<IBook>,
    private bookService: BookService,
    private categoryService: CategoryService,
    private authorService: AuthorService
  ) {
    this.book = data;

    this.authorService.getAllAuthors()
      .subscribe(authors => this.authors = authors as IAuthor[]);

    this.categoryService.getAllCategories()
      .subscribe(categories => this.categories = categories as ICategory[]);
  }

  saveBook(data) {
    const obs = data.bookId ? this.bookService.updateBook(data) : this.bookService.createBook(data);
    this.inProgress = true;

    obs.subscribe(book => this.dialogRef.close(book));
  }

  newAuthor() {
    const dialogRef = this.dialog.open(AuthorCreateComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(author => author && this.authors.unshift(author));
  }

  ngOnInit() {
  }

}


