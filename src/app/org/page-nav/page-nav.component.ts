import { Component, OnInit } from '@angular/core';
import {OrgService} from '../services/org.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-nav',
  templateUrl: './page-nav.component.html',
  styleUrls: ['./page-nav.component.scss']
})
export class PageNavComponent implements OnInit {

  constructor(private orgService: OrgService, private router: Router) { }

  logOut() {
    this.orgService.logout()
      .subscribe(() => this.router.navigate(['/org/account']));
  }

  ngOnInit() {
  }

}