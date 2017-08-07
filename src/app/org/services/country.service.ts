import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }
  getAllCountries() {
    return this.http.get('/api/country/country-list');
  }

}
