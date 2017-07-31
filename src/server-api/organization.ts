import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID, Address} from './common/';
import {Country} from './country';

const filePath = join(__dirname, './data/organizations.db.json');

export class Organization {
  orgId: string = createGUID();
  name: string;
  address: Address;
  branch: Organization | null;
  email?: string;
  phoneNumber?: string;
  country: Country;

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static getAllOrganizations(): Organization[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getOrganization(id: string): Organization {
    return this.getAllOrganizations().find(l => l.orgId === id);
  }

  static createOrganization(data) {
    const organization = new Organization(data);
    const orgs = this.getAllOrganizations();
    orgs.push(organization);
    this.saveAllOrganizations(orgs);
    return organization;
  }

  static updateOrganization(data) {
    const libs = this.getAllOrganizations();
    const libIndex = libs.findIndex(l => l.orgId === data.id);
    libs.splice(libIndex, 1, data);
    this.saveAllOrganizations(libs);
    return data;
  }

  static deleteOrganization(id) {
    const orgs = this.getAllOrganizations();
    const orgIndex = orgs.findIndex(l => l.orgId === id);
    orgs.splice(orgIndex, 1);
    this.saveAllOrganizations(orgs);
  }

  static saveAllOrganizations(libraryList) {
    writeFileSync(filePath, JSON.stringify(libraryList, null, 2));
  }
}

export const OrganizationRouter = express.Router();

OrganizationRouter.get('/organization-list', (req, res) => {
  res.json(Organization.getAllOrganizations());
});

OrganizationRouter.get('/:countryId', (req, res) => {
  res.json(Organization.getOrganization(req.params.id));
});

// create organization
OrganizationRouter.post('/', (req, res) => {
  res.json(Organization.createOrganization(req.body));
});

// update organization
OrganizationRouter.post('/:countryId', (req, res) => {
  const data = req.body;
  data.id = req.params.id;
  res.json(Organization.updateOrganization(data));
});

// delete organization
OrganizationRouter.delete('/:countryId', (req, res) => {
  const id = req.params.id;
  res.json(Organization.deleteOrganization(id));
});


