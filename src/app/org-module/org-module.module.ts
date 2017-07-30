import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './src/app/org-module/login/login.component';
import { CreateAccountComponent } from './src/app/org-module/create-account/create-account.component';
import { BooksComponent } from './src/app/org-module/books/books.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, CreateAccountComponent, BooksComponent]
})
export class OrgModuleModule { }
