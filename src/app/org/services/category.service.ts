import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('/api/category/category-list');
  }
}
