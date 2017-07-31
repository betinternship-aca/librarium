import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID, Address} from './common/';
import {Country} from './country';

const filePath = join(__dirname, './data/libraries.db.json');

export class Library {
  libraryId: string = createGUID();
  name: string;
  address: Address;
  branch: Library | null;
  email?: string;
  phoneNumber?: string;
  country: Country;

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static getAllLibraries(): Library[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getLibrary(id: string): Library {
    return this.getAllLibraries().find(l => l.libraryId === id);
  }

  static createLibrary(data) {
    const library = new Library(data);
    const libs = this.getAllLibraries();
    libs.push(library);
    this.saveAllLibraries(libs);
    return library;
  }

  static updateLibrary(data) {
    const libs = this.getAllLibraries();
    const libIndex = libs.findIndex(l => l.libraryId === data.id);
    libs.splice(libIndex, 1, data);
    this.saveAllLibraries(libs);
    return data;
  }

  static deleteLibrary(id) {
    const libs = this.getAllLibraries();
    const libIndex = libs.findIndex(l => l.libraryId=== id);
    libs.splice(libIndex, 1);
    this.saveAllLibraries(libs);
  }

  static saveAllLibraries(libraryList) {
    writeFileSync(filePath, JSON.stringify(libraryList, null, 2));
  }
}

export const LibraryRouter = express.Router();

LibraryRouter.get('/library-list', (req, res) => {
  res.json(Library.getAllLibraries());
});

LibraryRouter.get('/:libraryId', (req, res) => {
  res.json(Library.getLibrary(req.params.id));
});

// create library
LibraryRouter.post('/', (req, res) => {
  res.json(Library.createLibrary(req.body));
});

// update library
LibraryRouter.post('/:libraryId', (req, res) => {
  const data = req.body;
  data.id = req.params.id;
  res.json(Library.updateLibrary(data));
});

// delete library
LibraryRouter.delete('/:libraryId', (req, res) => {
  const id = req.params.id;
  res.json(Library.deleteLibrary(id));
});


