import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {CreateAccountComponent} from './create-account/create-account.component';
import {BooksComponent} from './books/books.component';
import {OrgRoutingModule} from './org-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import {OrgMaterialModule} from './org-material.module';

@NgModule({
  declarations: [
    LoginComponent,
    CreateAccountComponent,
    BooksComponent,
    LoginPageComponent
  ],
  imports: [
    OrgRoutingModule,
    OrgMaterialModule
  ]
})
export class OrgModule {
}
