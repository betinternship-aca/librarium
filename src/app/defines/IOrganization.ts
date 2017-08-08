/**
 * Created by hospogh on 8/1/17.
 */
import {ICountry} from './ICountry';

export interface IOrganization {
  orgId: string;
  name: string;
  login: string;
  password: string;
  address: string;
  email?: string;
  telephone?: string;
  countryId: string;
  country?: ICountry;
  city: string;
  parentOrgId: string | null;
  parentOrg?: IOrganization | null;
  description: string;

}
