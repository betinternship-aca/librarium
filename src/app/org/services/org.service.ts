import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../../defines/ILoginData';
import {IOrganization} from '../../defines/IOrganization';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

const getCookieValue = (propName) => {
  const keyValues = document.cookie.split(';').map((pair) => pair.split('='));
  const keyValue = keyValues.find((pair) => pair[0] === propName);
  return keyValue && keyValue[1];
};

@Injectable()
export class OrgService {
  orgSubject: Subject<IOrganization>;

  constructor(private http: HttpClient) {
    this.orgSubject = new BehaviorSubject(getCookieValue('orgSessionKey') ? {} as IOrganization : null);
    this.http.get('/api/org/logged-in-org')
      .subscribe((loggedInOrg: IOrganization) => {
        this.orgSubject.next(loggedInOrg);
      });
  }

  createOrg(data) {
    return this.http.post('/api/org', data);
  }

  login(data: ILoginData) {
    return this.http.post('/api/org/login', data).do((org: IOrganization) => {
      this.orgSubject.next(org);
    });
  }

  logout() {
    this.http.get('/api/org/logout')
      .subscribe(() => this.orgSubject.next(null));
    return this.orgSubject;
  }

  isLoggedIn() {
    return this.orgSubject.map((org: IOrganization) => !!org);
  }

  getLoggedInOrg() {
    return this.orgSubject;
  }
}
