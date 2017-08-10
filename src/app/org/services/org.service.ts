import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../../defines/ILoginData';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) {
  }

  createOrg(data) {
    return this.http.post('/api/org', data);
  }

  login(data: ILoginData) {
    return this.http.post('/api/org/login', data);
  }

  logout() {
    return this.http.get('/api/org/logout');
  }

  isLoggedIn() {
    return this.http.get('/api/org/is-logged-in') as Observable<boolean>;
  }
}
