import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {AppCommonModule} from './app-common/app-common.module';
import {BookComponent} from './components/book/book.component';
import {BookInfoComponent} from './components/book-info/book-info.component';
import {BookPreviewComponent} from './components/book-preview/book-preview.component';
import {BooksComponent} from './components/books/books.component';
import {BookService} from './services/book.service';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FocusDirective} from './directives/focus.directive';
import {FormsModule} from '@angular/forms';
import {OrderService} from './services/order.service';
import {OrderComponent} from './components/order/order.component';
import {HistoryComponent} from './components/history/history.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {UserService} from './services/user.service';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';
import {ReservedBooksComponent} from './components/reserved-books/reserved-books.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookInfoComponent,
    BooksComponent,
    BookPreviewComponent,
    FocusDirective,
    OrderComponent,
    HistoryComponent,
    HomePageComponent,
    UserCreateAccountComponent,
    UserLoginComponent,
    UserLoginPageComponent,
    ReservedBooksComponent
  ],
  imports: [
    AppCommonModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  entryComponents: [BookPreviewComponent, UserLoginPageComponent],
  providers: [
    BookService,
    OrderService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
