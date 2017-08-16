import {Component, Inject, Input, OnInit} from '@angular/core';
import {ILoginData} from '../../defines/ILoginData';
import {UserService} from '../../services/user.service';
import {MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent {
  loginData = {} as ILoginData;
  errorMsg: string | null = null;

  constructor(private userService: UserService,
              private dialogRef: MdDialogRef<ILoginData>) {
  }

  login() {
    this.userService.login(this.loginData)
      .subscribe(() => this.dialogRef.close(),
      () => this.errorMsg = 'Incorrect login or password');
  }
}
