/**
 * Created by anmin on 30.07.2017.
 */
import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';

const filePath = join(__dirname, './data/countries.db.json');

export class Country {
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






