import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from '../defines/ILoginData';
import {IUser} from '../defines/IUser';
import 'rxjs/add/observable/from';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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
    const obs = this.http.post('/api/user/login', data);
    obs.subscribe((user: IUser) => {
      this.userSubject.next(user);
    });
    return obs;
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
