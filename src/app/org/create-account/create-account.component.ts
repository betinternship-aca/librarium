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
  @Input()
  countries: ICountry[];
  @Input()
  organization;
  constructor(private orgService: OrgService, private router: Router, private countryService: CountryService) {
    this.organization = this.data;
    this.organization.country = this.countryService.getAllCountries()
      .subscribe(countries => this.countries = countries as ICountry[]);
  }

  createOrg() {
    this.orgService.createOrg(this.data)
      .subscribe(() => this.router.navigate(['/org/books']));
  }

  ngOnInit() {
  }
}

