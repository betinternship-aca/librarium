/**
 * Created by anmin on 30.07.2017.
 */
///<reference path="../../node_modules/@types/node/index.d.ts"/>
import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';
import {ICountry} from '../app/defines/ICountry';

const filePath = join(__dirname, './data/countries.db.json');

  export class Country implements ICountry {
    countryId: string;
    name: string;

  constructor() {
  }

  static getAllCountries(): Country[] {
    return JSON.parse(readFileSync(filePath).toString());
  }
}
export const CountryRouter = express.Router();

CountryRouter.get('/country-list', (req, res) => {
  res.json(Country.getAllCountries());
});






