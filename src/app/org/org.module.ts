import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {OrgRoutingModule} from './org-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {OrgMaterialModule} from './org-material.module';
import {BookComponent} from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import {BookEditorComponent} from './book-editor/book-editor.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BooksComponent,
    LoginPageComponent,
    BookComponent,
    BookEditorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    OrgRoutingModule,
    OrgMaterialModule
  ],
  entryComponents: [BookEditorComponent]
})
export class OrgModule {
}
