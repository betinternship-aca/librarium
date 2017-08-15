import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';
import {HistoryComponent} from './components/history/history.component';
import {BooksComponent} from './components/books/books.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'org',
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
        path: 'books',
        component: BooksComponent
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
  exports: [RouterModule]
})
export class AppRoutingModule {
}
