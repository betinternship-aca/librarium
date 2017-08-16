import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {ILoginData} from '../app/defines/ILoginData';
import {IUser} from '../app/defines/IUser';

const filePath = join(__dirname, './data/users.db.json');

export class User implements IUser {
  static loggedInUser: User;
  userId: string = createGUID();
  name: string;
  login: string;
  password: string;
  address: string;
  gender: string;
  email: string;
  telephone?: string;
  reservedBooks: string;

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static clearPrivateInfo(user: User) {
    delete user.password;
    return user;
  }

  static getAllUsers(): User[] {
    return JSON.parse(readFileSync(filePath).toString());
  }

  static getUser(id: string): User {
    return this.getAllUsers().find(u => u.userId === id);
  }

  static createUser(data) {
    const user = new User(data);
    const users = this.getAllUsers();
    users.push(user);
    this.saveAllUsers(users);
    return user;
  }

  static updateUser(data) {
    const users = this.getAllUsers();
    const userIndex = users.findIndex(u => u.userId === data.id);
    users.splice(userIndex, 1, data);
    this.saveAllUsers(users);
    return data;
  }

  static deleteUser(id) {
    const users = this.getAllUsers();
    const userIndex = users.findIndex(u => u.userId === id);
    users.splice(userIndex, 1);
    this.saveAllUsers(users);
  }

  static saveAllUsers(userList) {
    writeFileSync(filePath, JSON.stringify(userList, null, 2));
  }

  static login(loginData: ILoginData) {
    const user = this.getAllUsers()
      .find(user => user.login === loginData.login && user.password === loginData.password);
    return user && User.clearPrivateInfo(user);
  }
}


export const UserRouter = express.Router();

UserRouter.get('/logged-in-user', (req, res) => {
  res.json(User.loggedInUser);
});

UserRouter.post('/login', (req, res) => {
  const user = User.login(req.body);
  if (!user) {
    User.loggedInUser = null;
    return res.status(404).json(null);
  }

  User.loggedInUser = user;
  res.json(user);
});
UserRouter.get('/logout', (req, res) => {
  User.loggedInUser = null;
  res.end();
});

// create user
UserRouter.post('/', (req, res) => {
  res.json(User.createUser(req.body));
});
