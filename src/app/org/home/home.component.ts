import {Component} from '@angular/core';
import {OrgService} from '../services/org.service';
import {Router} from '@angular/router';
import {IOrganization} from '../../defines/IOrganization';

@Component({
  selector: 'app-page-nav',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class PageNavComponent {
  loggedInOrgName = '';

  constructor(private orgService: OrgService, private router: Router) {
    this.orgService.getLoggedInOrg()
      .subscribe((org: IOrganization) => org && (this.loggedInOrgName = org.name));
  }

  logOut() {
    this.orgService.logout()
      .subscribe(() => this.router.navigate(['/org/account']));
  }
}
