import { Component, OnInit } from '@angular/core';
import {ILoginData} from '../../defines/ILoginData';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  loginData = {} as ILoginData;

  constructor(private userService: UserService, private router: Router) { }
  login() {
    this.userService.login(this.loginData)
      .subscribe(() => this.router.navigate(['home']));
  }

  ngOnInit() {
  }

}
