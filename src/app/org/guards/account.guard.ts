import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {OrgService} from '../services/org.service';

const pathEquals = (urlSegment, path) => urlSegment && urlSegment.path === path;

@Injectable()
export class AccountGuard implements CanActivateChild {
  constructor(private orgService: OrgService, private router: Router) {}

  canActivateChild(childRout: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const isAccountPage = pathEquals(childRout.url[0], 'account') ||
      pathEquals(childRout.parent.url[0], 'account');

    const shouldBeLoaded = this.orgService.isLoggedIn().map(loggedIn => {
      return  isAccountPage ? !loggedIn : loggedIn;
    });

    const navigation = isAccountPage ? ['org', 'home'] : ['org'];
    shouldBeLoaded.subscribe(loggedIn => !loggedIn && this.router.navigate(navigation));

    return shouldBeLoaded;
  }
}
