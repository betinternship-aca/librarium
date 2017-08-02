import { Component, Input, OnInit } from '@angular/core';
import { ILoginData } from '../../defines/ILoginData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData = {} as ILoginData;

  constructor() {}

  login() {
    console.log(this.loginData);
  }

  ngOnInit() {
  }
}
