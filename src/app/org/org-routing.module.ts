import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';

const orgRoutes: Routes = [
  {
    path: 'org',
    children: [
      {
        path: 'auth',
        component: LoginPageComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {path: 'create', component: CreateAccountComponent},
          {path: '', redirectTo: 'login', pathMatch: 'full'}
        ]
      },
      {
        path: 'books',
        component: BooksComponent
        // canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(orgRoutes)
  ],
  exports: [RouterModule]
})
export class OrgRoutingModule {
}
