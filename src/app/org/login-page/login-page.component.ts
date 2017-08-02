import {Component} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  links = [
    {link: 'login', label: 'Log In'},
    {link: 'create', label: 'Create'}
  ];
}
