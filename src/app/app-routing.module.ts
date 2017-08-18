import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';
import {HistoryComponent} from './components/history/history.component';
import {BooksComponent} from './components/books/books.component';
import {ReservedBooksComponent} from './components/reserved-books/reserved-books.component';
import {BooksResolverService} from './services/books-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    outlet: 'account',
    component: UserLoginComponent
  },
  {
    path: 'create',
    outlet: 'account',
    component: UserCreateAccountComponent
  },
  {
    path: 'home',
    component: HomePageComponent,
    children: [
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'reserved',
        component: ReservedBooksComponent
      },
      {
        path: 'books',
        component: BooksComponent,
        resolve: {
          books: BooksResolverService
        }
      },
      {
        path: '',
        redirectTo: 'books',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [BooksResolverService]
})
export class AppRoutingModule {
}
