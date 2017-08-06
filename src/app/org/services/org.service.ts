import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILoginData} from "../../defines/ILoginData";

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
}
