import { Component, OnInit } from '@angular/core';
import {OrgService} from '../services/org.service';
import {IOrganization} from '../../defines/IOrganization';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  data = {} as IOrganization;

  constructor(private orgService: OrgService) { }

  createOrg() {
    this.orgService.createOrg(this.data)
      .subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
