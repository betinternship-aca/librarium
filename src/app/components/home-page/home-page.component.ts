import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MdDialog} from '@angular/material';
import {UserService} from '../../services/user.service';
import {UserLoginPageComponent} from '../user-login-page/user-login-page.component';
import {IUser} from '../../defines/IUser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  isLoggedIn = false;
  loggedInUserName = '';

  constructor(private router: Router,
              private dialog: MdDialog,
              private userService: UserService) {
    this.userService.isLoggedIn().subscribe((isLogged) => this.isLoggedIn = isLogged);
    this.userService.getLoggedInUser().subscribe((user: IUser) => user && (this.loggedInUserName = user.name));
    this.router.navigate(['']);
  }

  signOut() {
    this.userService.logout();
    this.router.navigate(['home']);
  }

  openAccountDialog() {
    const dialog = this.dialog.open(UserLoginPageComponent);
  }
}
