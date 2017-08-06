import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {OrgService} from '../services/org.service';

@Injectable()
export class BooksGuard implements CanActivate {
  constructor(private orgService: OrgService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.orgService.isLoogedIn();
  }
}
