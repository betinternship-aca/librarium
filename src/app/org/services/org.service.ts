import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrgService {

  constructor(private http: HttpClient) { }

  createOrg(data) {
    return this.http.post('/api/org', data);
  }
}
