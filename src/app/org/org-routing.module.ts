import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './auth.guard';

const orgRoutes: Routes = [
  {
    path: 'org',
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        children: [
          {path: '', component: LoginComponent},
          {path: 'create', component: CreateAccountComponent}
        ]
      },
      {
        path: 'books',
        component: BooksComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'login',
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
