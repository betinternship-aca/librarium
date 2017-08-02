import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  navLinks: any;
  activateLinkIndex = 0;

  constructor(private  router: Router) {
    this.navLinks = [
      {
        label: 'signIn',
        link: ''
      },
      {
        label: 'singUp',
        link: 'create'
      }
    ];
  }

  ngOnInit() {
  }

}
