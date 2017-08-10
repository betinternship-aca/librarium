import {Component, Inject, OnInit} from '@angular/core';
import {ILoginData} from '../../defines/ILoginData';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginData = {} as ILoginData;

  constructor(private userService: UserService,
              private router: Router,
              @Inject(MD_DIALOG_DATA) data: ILoginData,
              private dialog: MdDialog,
              private dialogRef: MdDialogRef<ILoginData>) {
  }

  login() {
    const obs =
    this.userService.login(this.loginData)
      .subscribe(() => this.router.navigate(['home']));
  }

  ngOnInit() {
  }

}
