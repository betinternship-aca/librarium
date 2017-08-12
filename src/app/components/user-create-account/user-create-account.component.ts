import {Component, Inject, OnInit} from '@angular/core';

import {IUser} from '../../defines/IUser';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import {ILoginData} from '../../defines/ILoginData';

@Component({
  selector: 'app-user-create-account',
  templateUrl: './user-create-account.component.html',
  styleUrls: ['./user-create-account.component.scss']
})
export class UserCreateAccountComponent implements OnInit {
  data = {} as IUser;

  constructor(private router: Router,
              private userService: UserService,
              @Inject(MD_DIALOG_DATA) data: IUser,
              private dialog: MdDialog,
              private dialogRef: MdDialogRef<ILoginData>) {
  }

  createUser() {
    this.userService.createUser(this.data)
      .subscribe(() => this.dialogRef.close());
  }

  ngOnInit() {
  }

}
