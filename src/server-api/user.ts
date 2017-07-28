import * as express from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';

const filePath = join(__dirname, './data/users.db.json');

class User {
  id: string; // consider using guid
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  phoneNumber?: number;

  static getAllUsers(): User[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getUser(id: string): User {
    return this.getAllUsers().find(u => u.id === id);
  }
}

export const UserRouter = express.Router();

UserRouter.get('/user-list', (req, res) => {
  res.json(User.getAllUsers());
});

UserRouter.get('/:id', (req, res) => {
  res.json(User.getUser(req.params.id));
});
