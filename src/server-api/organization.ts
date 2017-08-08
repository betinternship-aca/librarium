import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {Country} from './country';
import {ILoginData} from '../app/defines/ILoginData';

const filePath = join(__dirname, './data/organizations.db.json');

export class Organization {
  static loggedInOrg: Organization;

  name: string;
  login: string;
  password: string;
  orgId: string = createGUID();
  address: string;
  parentOrgId: string | any;
  email?: string;
  telephone?: string;
  countryId: string;
  country: Country | null;
  city: string;
  description: string;

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static getAllOrg(): Organization[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getOrg(id: string): Organization {
    return this.getAllOrg().find(l => l.orgId === id);
  }

  static createOrg(data) {
    const organization = new Organization(data);
    const orgs = this.getAllOrg();
    orgs.push(organization);
    this.saveAllOrg(orgs);
    return organization;
  }

  static updateOrg(data) {
    const orgs = this.getAllOrg();
    const orgIndex = orgs.findIndex(l => l.orgId === data.id);
    orgs.splice(orgIndex, 1, data);
    this.saveAllOrg(orgs);
    return data;
  }

  static deleteOrg(id) {
    const orgs = this.getAllOrg();
    const orgIndex = orgs.findIndex(l => l.orgId === id);
    orgs.splice(orgIndex, 1);
    this.saveAllOrg(orgs);
  }

  static saveAllOrg(organizationList) {
    writeFileSync(filePath, JSON.stringify(organizationList, null, 2));
  }

  static login(loginData: ILoginData) {
    return this.getAllOrg()
      .find(org => org.login === loginData.login && org.password === loginData.password);
  }
}

export const OrganizationRouter = express.Router();

OrganizationRouter.get('/org-list', (req, res) => {
  res.json(Organization.getAllOrg());
});

OrganizationRouter.post('/login', (req, res) => {
  const org = Organization.login(req.body);
  if (!org) {
    Organization.loggedInOrg = null;
    return res.status(404).end();
  }

  Organization.loggedInOrg = org;
  res.end();
});
OrganizationRouter.get('/logout', (req, res) => {
  Organization.loggedInOrg = null;
  res.end();
});

OrganizationRouter.get('/is-logged-in', (req, res) => {
  res.json(!!Organization.loggedInOrg);
});

OrganizationRouter.get('/:orgId', (req, res) => {
  res.json(Organization.getOrg(req.params.id));
});

// create organization
OrganizationRouter.post('/', (req, res) => {
  res.json(Organization.createOrg(req.body));
});

OrganizationRouter.post('/login', (req, res) => {
  const org = Organization.login(req.body);
  if (!org) {
    Organization.loggedInOrg = null;
    return res.status(404).end();
  }

  Organization.loggedInOrg = org;
  res.end();
});

// update organization
OrganizationRouter.post('/:orgId', (req, res) => {
  const data = req.body;
  data.id = req.params.id;
  res.json(Organization.updateOrg(data));
});

// delete organization
OrganizationRouter.delete('/:orgId', (req, res) => {
  const id = req.params.id;
  res.json(Organization.deleteOrg(id));
});


