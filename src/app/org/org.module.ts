import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {OrgRoutingModule} from './org-routing.module';
import {LoginPageComponent} from './login-page/login-page.component';
import {OrgMaterialModule} from './org-material.module';
import {BookComponent} from './book/book.component';
import {HttpClientModule} from '@angular/common/http';
import {BookEditorComponent} from './book-editor/book-editor.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ImageUploadComponent} from './image-upload/image-upload.component';
import {BookService} from './services/book.service';
import {AppCommonModule} from '../app-common/app-common.module';
import {OrgService} from './services/org.service';
import {CategoryService} from './services/category.service';
import {AccountGuard} from './guards/account.guard';
import {PageNavComponent} from './page-nav/page-nav.component';
import {CountryService} from './services/country.service';
import { BookPreviewComponent } from './book-preview/book-preview.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BooksComponent,
    LoginPageComponent,
    BookComponent,
    BookEditorComponent,
    BookPreviewComponent,
    ImageUploadComponent,
    PageNavComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    OrgRoutingModule,
    OrgMaterialModule,
    AppCommonModule
  ],
  entryComponents: [
    BookEditorComponent
  ],
  providers: [
    BookService,
    OrgService,
    CategoryService,
    CountryService,
    AccountGuard
  ]
})
export class OrgModule {
}
