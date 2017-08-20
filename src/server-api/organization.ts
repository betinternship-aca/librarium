import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {Country} from './country';
import {ILoginData} from '../app/defines/ILoginData';
import {IOrganization} from '../app/defines/IOrganization';
import {Book} from './book';
import {Order} from './order';

const filePath = join(__dirname, './data/organizations.db.json');

const clearOrgData = (data: IOrganization) => {
  delete data.country;
  delete data.parentOrg;
};

export class Organization implements IOrganization {
  static loggedInOrg: Organization = null;

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
    return this.getAllOrg().find(org => org.orgId === id);
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

OrganizationRouter.post('/login', (req, res) => {
  const org = Organization.login(req.body);
  if (!org) {
    Organization.loggedInOrg = null;
    return res.status(404).end();
  }

  Organization.loggedInOrg = org;
  res.json(org);
});

OrganizationRouter.get('/logged-in-org', (req, res) => {
  res.json(Organization.loggedInOrg);
});

OrganizationRouter.get('/logout', (req, res) => {
  Organization.loggedInOrg = null;
  res.end();
});

OrganizationRouter.get('/books', (req, res) => {
  res.json(Organization.getAllBooks());
});

OrganizationRouter.get('/reserved', (req, res) => {
  res.json(Order.getOrgReservations());
});
OrganizationRouter.get('/history', (req, res) => {
  res.json(Order.getOrgOrderHistory());
});

OrganizationRouter.get('/return/:orderId', (req, res) => {
  Order.finishOrder(req.params.orderId);
  res.end();
});

// todo: check do we need this
OrganizationRouter.get('/:orgId', (req, res) => {
  res.json(Organization.getOrg(req.params.orgId));
});

// create organization
OrganizationRouter.post('/', (req, res) => {
  res.json(Organization.createOrg(req.body));
});
