import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {Country} from './country';
import {ILoginData} from '../app/defines/ILoginData';
import {IOrganization} from '../app/defines/IOrganization';
import {Book} from './book';

const filePath = join(__dirname, './data/organizations.db.json');

const clearOrgData = (data: IOrganization) => {
  delete data.country;
  delete data.parentOrg;
};

export class Organization implements IOrganization {
  static loggedInOrg: Organization;

  orgId: string = createGUID();
  name: string;
  login: string;
  password: string;
  address: string;
  email?: string;
  telephone?: string;
  countryId: string;
  country: Country | null;
  city: string;
  description: string;
  parentOrgId: string | null;
  parentOrg: Organization | null;

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }
  static getAllBooks() {
    return Book.getAllBooks().filter(book => book.orgId === Organization.loggedInOrg.orgId);
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

  static saveAllOrg(orgList) {
    writeFileSync(filePath, JSON.stringify(orgList, null, 2));
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
OrganizationRouter.get('/books', (req, res) => {
  res.json(Organization.getAllBooks());
});


OrganizationRouter.get('/:orgId', (req, res) => {
  res.json(Organization.getOrg(req.params.id));
});
// create organization
OrganizationRouter.post('/', (req, res) => {
  res.json(Organization.createOrg(req.body));
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

