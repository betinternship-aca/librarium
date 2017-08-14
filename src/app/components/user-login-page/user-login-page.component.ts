import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent {
  links = [
    {link: ['', {outlets: {account: ['login']}}], label: 'Log In'},
    {link: ['', {outlets: {account: ['create']}}], label: 'Create'}
  ];

  constructor(router: Router, dialog: MdDialogRef<UserLoginPageComponent>) {
    dialog.afterClosed().subscribe(() => router.navigate([{outlets: {account: null}}]));
  }
}
