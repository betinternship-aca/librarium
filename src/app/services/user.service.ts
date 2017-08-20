import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../defines/ILoginData';
import {IUser} from '../defines/IUser';
import 'rxjs/add/operator/do';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  userSubject: Subject<IUser>;

  constructor(private http: HttpClient) {
    this.userSubject = new BehaviorSubject(null);
    this.http.get('/api/user/logged-in-user')
      .subscribe((loggedInUser: IUser) => {
        this.userSubject.next(loggedInUser);
      });
  }

  // change createUser to auto login
  createUser(data) {
    return this.http.post('/api/user', data);
  }

  login(data: ILoginData) {
    return this.http.post('/api/user/login', data).do((user: IUser) => {
      this.userSubject.next(user);
    });
  }

  logout() {
    this.http.get('/api/user/logout')
      .subscribe(() => this.userSubject.next(null));
    return this.userSubject;
  }

  isLoggedIn() {
    return this.userSubject.map((user: IUser) => !!user);
  }

  getLoggedInUser() {
    return this.userSubject;
  }
}
