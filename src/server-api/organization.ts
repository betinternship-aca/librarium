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

  sessionKeys: string[] = [];

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static clearPrivateInfo(org: Organization) {
    delete org.password;
    delete org.sessionKeys;

    return org;
  }

  static getAllBooks() {
    return Book.getAllBooks().filter(book => book.orgId === Organization.loggedInOrg.orgId);
  }

  static getAllOrgs(): Organization[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getOrgBySessionKey(sessionKey?: string) {
    if (!sessionKey) {
      return null;
    }

    const orgData = this.getAllOrgs().find(org => org.sessionKeys.includes(sessionKey));
    return Organization.dataToOrg(orgData);
  }

  static dataToOrg(data) {
    return data && new Organization(data);
  }

  static createOrg(data) {
    const organization = new Organization(data);
    const orgs = this.getAllOrgs();
    orgs.push(organization);
    this.saveAllOrgs(orgs);
    return organization;
  }

  static updateOrg(data) {
    const orgs = this.getAllOrgs();
    const orgIndex = orgs.findIndex(org => org.orgId === data.orgId);
    orgs.splice(orgIndex, 1, data);
    this.saveAllOrgs(orgs);
    return data;
  }

  static saveAllOrgs(orgList) {
    writeFileSync(filePath, JSON.stringify(orgList, null, 2));
  }

  static login(loginData: ILoginData) {
    const orgData = this.getAllOrgs()
      .find(org => org.login === loginData.login && org.password === loginData.password);
    return Organization.dataToOrg(orgData);
  }

  addSessionKey(sessionKey) {
    this.sessionKeys.push(sessionKey);
    Organization.updateOrg(this);
  }

  removeSessionKey(sessionKey) {
    const {sessionKeys} = this;
    const ind = sessionKeys.indexOf(sessionKey);
    sessionKeys.splice(ind, 1);

    Organization.updateOrg(this);
  }
}

export const OrganizationRouter = express.Router();

OrganizationRouter.post('/login', (req, res) => {
  const org = Organization.login(req.body);

  if (!org) {
    res.cookie('orgSessionKey', '');
    return res.status(404).end();
  }

  const sessionKey = createGUID();
  res.cookie('orgSessionKey', sessionKey, {maxAge: new Date(2024, 0, 1), httpOnly: true});
  org.addSessionKey(sessionKey);

  res.json(Organization.clearPrivateInfo(org));
});

OrganizationRouter.get('/logged-in-org', (req, res) => {
  res.json(Organization.loggedInOrg);
});

OrganizationRouter.get('/logout', (req, res) => {
  const {orgSessionKey} = req.cookies;
  const {loggedInOrg} = req;

  loggedInOrg && loggedInOrg.removeSessionKey(orgSessionKey);

  res.cookie('orgSessionKey', '');

  res.json(null);
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

// create organization
OrganizationRouter.post('/', (req, res) => {
  res.json(Organization.createOrg(req.body));
});
