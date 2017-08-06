import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) { }

  createOrg(data) {
    return this.http.post('/api/org', data);
  }
  isLoogedIn() {
    return this.http.get('/api/org/is-logged-in') as Observable<boolean>;
  }
}
