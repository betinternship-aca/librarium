import {Component, Inject, Input, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {IAuthor} from '../../defines/IAuthor';
import {AuthorService} from '../services/author.service';

@Component({
  selector: 'app-author-create',
  templateUrl: './author-create.component.html',
  styleUrls: ['./author-create.component.scss']
})
export class AuthorCreateComponent {

  @Input()
  author;

  constructor(
    @Inject(MD_DIALOG_DATA) data: IAuthor,
    private dialogRef: MdDialogRef<IAuthor>,
    private authorService: AuthorService,

  ) {
    this.author = data;
  }

  saveAuthor(data) {
    const obs = data.authorId ? this.authorService.updateAuthor(data) : this.authorService.createAuthor(data);
    obs.subscribe(author => this.dialogRef.close(author));
  }
}
