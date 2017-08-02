import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  login: string;
  @Input()
  password: string;

  constructor() {

  }

  ngOnInit() {
  }

}
