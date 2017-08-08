import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICountry} from '../../defines/ICountry';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) {
  }

  getAllCountries() {
    return this.http.get('/api/country/country-list') as Observable<ICountry[]>;
  }

}
