/**
 * Created by hospogh on 8/1/17.
 */
import {ICountry} from './ICountry';

export interface IOrganization {
  name: string;
  login: string;
  password: string;
  orgId: string;
  address: string;
  email?: string;
  telephone?: string;
  countryId: string;
  country?: ICountry;
  city: string;
  parentOrgId: string | null;
  parentOrg?: IOrganization | null;
}
