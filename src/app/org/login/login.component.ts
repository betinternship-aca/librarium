import {Component, Input, OnInit} from '@angular/core';
import {ILoginData} from '../../defines/ILoginData';
import {OrgService} from "../services/org.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {} as ILoginData;

  constructor(private  orgService: OrgService) {
  }

  login() {
    this.orgService.login(this.loginData);
  }
}
