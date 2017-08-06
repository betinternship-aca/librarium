import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {AccountGuard} from './guards/account.guard';
import { BooksResolverService } from './services/books-resolver.service';


const orgRoutes: Routes = [
  {
    path: 'org',
    canActivateChild: [AccountGuard],
    children: [
      {
        path: 'account',
        component: LoginPageComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
          {
            path: 'create',
            component: CreateAccountComponent
          },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'}
        ]
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
        redirectTo: 'account',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orgRoutes)
  ],
  exports: [RouterModule],
  providers: [BooksResolverService]
})
export class OrgRoutingModule {
}
