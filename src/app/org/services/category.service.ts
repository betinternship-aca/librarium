import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICategory} from '../../defines/ICategory';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories() {
    return this.http.get('/api/category/category-list');
  }
}
