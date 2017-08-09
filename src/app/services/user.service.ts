import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../defines/ILoginData';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }
  createUser(data) {
    return this.http.post('/api/user', data);
  }
  login(data: ILoginData) {
    return this.http.post('/api/user/login', data);
  }
  logout() {
    return this.http.get('/api/user/logout');
  }
  isLoggedIn() {
    return this.http.get('/api/user/is-logged-in') as Observable<boolean>;
  }

}
