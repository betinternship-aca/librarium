import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAllAuthors() {
    return this.http.get('/api/author/author-list');
  }

}
