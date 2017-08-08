import { Component, OnInit } from '@angular/core';

import {IUser} from '../../defines/IUser';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-create-account',
  templateUrl: './user-create-account.component.html',
  styleUrls: ['./user-create-account.component.scss']
})
export class UserCreateAccountComponent implements OnInit {
  data = {} as IUser;

  constructor(private userService: UserService, private router: Router) { }
  createUser() {
    this.userService.createUser(this.data)
      .subscribe(() => this.router.navigate(['home']));
  }

  ngOnInit() {
  }

}
