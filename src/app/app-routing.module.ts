import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserLoginPageComponent} from './components/user-login-page/user-login-page.component';
import {UserLoginComponent} from './components/user-login/user-login.component';
import {UserCreateAccountComponent} from './components/user-create-account/user-create-account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'org',
    pathMatch: 'full'
  },
  {
    path: 'account',
    component: UserLoginPageComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent
      },
      {
        path: 'create',
        component: UserCreateAccountComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
