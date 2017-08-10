import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MdDialog} from '@angular/material';
import {UserLoginComponent} from '../user-login/user-login.component';
import {UserCreateAccountComponent} from '../user-create-account/user-create-account.component';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router, private dialog: MdDialog, private userService: UserService) {
  }

  routingToLogin() {
    const dialog = this.dialog.open(UserLoginComponent, {data: {}});
  }

  routingToCreate() {
    const dialog = this.dialog.open(UserCreateAccountComponent);
  }
}
