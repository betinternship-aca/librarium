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
import {PageNavComponent} from './home/home.component';
import {CountryService} from './services/country.service';
import { AuthorCreateComponent } from './author-create/author-create.component';
import {AuthorService} from './services/author.service';
import {OrderService} from './services/order.service';
import {ReservesComponent} from './reserves/reserves.component';
import { HistoryComponent } from './history/history.component';
import { HistoryResolverService } from './services/history-resolver.service';


@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BooksComponent,
    LoginPageComponent,
    BookComponent,
    BookEditorComponent,
    ImageUploadComponent,
    PageNavComponent,
    AuthorCreateComponent,
    ReservesComponent,
    HistoryComponent
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
    BookEditorComponent,
    AuthorCreateComponent
  ],
  providers: [
    BookService,
    OrgService,
    CategoryService,
    CountryService,
    AccountGuard,
    AuthorService,
    OrderService,
    HistoryResolverService
      ]
})
export class OrgModule {
}
