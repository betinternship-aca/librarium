import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {OrgModule} from './org/org.module';
import {AppCommonModule} from './app-common/app-common.module';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BooksComponent} from './components/books/books.component';
import {BookComponent} from './components/book/book.component';
import {BookService} from './services/book.service';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {OrderService} from './services/order.service';
import { BookPreviewComponent } from './components/book-preview/book-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    HomePageComponent,
    UserCreateAccountComponent,
    UserLoginComponent,
    UserLoginPageComponent,
    BookPreviewComponent
  ],
  imports: [
    AppCommonModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    OrgModule
  ],
  entryComponents: [BookPreviewComponent],
  providers: [
    BookService,
    UserService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
