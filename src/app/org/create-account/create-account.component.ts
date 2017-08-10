import {Component, Input, OnInit} from '@angular/core';
import {OrgService} from '../services/org.service';
import {IOrganization} from '../../defines/IOrganization';
import {Router} from '@angular/router';
import {CountryService} from '../services/country.service';
import {ICountry} from '../../defines/ICountry';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  data = {} as IOrganization;
  countries: ICountry[];

  constructor(private orgService: OrgService, private router: Router, private countryService: CountryService) {
    this.countryService.getAllCountries()
      .subscribe(countries => this.countries = countries);
  }

  createOrg() {
    this.orgService.createOrg(this.data)
      .subscribe(() => this.router.navigate(['/org/home/books']));
  }

  ngOnInit() {
  }
}

