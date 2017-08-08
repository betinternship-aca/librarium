import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {AppComponent} from './app.component';
import {OrgModule} from './org/org.module';
import {AppCommonModule} from './app-common/app-common.module';
import {HomePageComponent} from './components/home-page/home-page.component';
import {BooksComponent} from './components/books/books.component';
import {BookComponent} from './components/book/book.component';
import {BookService} from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BooksComponent,
    HomePageComponent
  ],
  imports: [
    AppCommonModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    OrgModule,
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
