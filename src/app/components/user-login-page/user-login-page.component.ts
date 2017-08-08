import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent {
  links = [
    {link: 'login', label: 'Log In'},
    {link: 'create', label: 'Create'}
  ];
 }
