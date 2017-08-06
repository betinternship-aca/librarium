import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {OrgService} from '../services/org.service';

@Injectable()
export class AccountGuard implements CanActivateChild {
  constructor(private orgService: OrgService, private router: Router) {}

  canActivateChild(childRout: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAccountPage = childRout.url[0].path === 'account' ||
      childRout.parent.url[0].path === 'account';

    const shouldBeLoaded = this.orgService.isLoogedIn().map(loggedIn => {
      return  isAccountPage ? !loggedIn : loggedIn;
    });

    const navigation = isAccountPage ? ['org', 'books'] : ['org'];
    shouldBeLoaded.subscribe(loggedIn => !loggedIn && this.router.navigate(navigation));

    return shouldBeLoaded;
  }
}
