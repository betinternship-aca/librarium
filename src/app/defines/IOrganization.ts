/**
 * Created by anmin on 01.08.2017.
 */

import {ICountry} from './ICountry';

export interface IOrganization {
  orgId: string;
  name: string;
  address: string;
  city: string;
  countryId: string;
  country?: ICountry;
  parentOrgId: string | null;
  parentOrg?: IOrganization | null;
  email?: string;
  phoneNumber?: string;
}
