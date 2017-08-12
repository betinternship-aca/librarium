import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {MdDialog} from '@angular/material';
import {UserService} from '../../services/user.service';
import {UserLoginPageComponent} from '../user-login-page/user-login-page.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private router: Router, private dialog: MdDialog, private userService: UserService) {
  }

  openAccountDialog() {
    const dialog = this.dialog.open(UserLoginPageComponent);
    dialog.afterClosed().subscribe((data) => console.log(data));
  }
}
