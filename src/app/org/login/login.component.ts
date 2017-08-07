import {Component, Input, OnInit} from '@angular/core';
import {ILoginData} from '../../defines/ILoginData';
import {OrgService} from '../services/org.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {} as ILoginData;

  constructor(private  orgService: OrgService, private router: Router) {
  }

  login() {
    this.orgService.login(this.loginData)
      .subscribe(() => this.router.navigate(['org', 'home']));
  }
}
