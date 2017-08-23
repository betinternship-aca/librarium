import * as express from 'express';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import {createGUID} from './common/';
import {ILoginData} from '../app/defines/ILoginData';
import {IUser} from '../app/defines/IUser';
import {Order} from './order';

const filePath = join(__dirname, './data/users.db.json');

export class User implements IUser {
  static loggedInUser: User = null;

  userId: string = createGUID();
  name: string;
  login: string;
  password: string;
  address: string;
  gender: string;
  email: string;
  telephone?: string;
  reservedBooks: string;

  sessionKeys: string[] = [];

  constructor(data) {
    // copies every property of data to this
    Object.assign(this, data);
  }

  static clearPrivateInfo(user: User) {
    delete user.password;
    delete user.sessionKeys;

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
    const userIndex = users.findIndex(u => u.userId === data.userId);
    users.splice(userIndex, 1, data);
    this.saveAllUsers(users);
    return data;
  }

  static saveAllUsers(userList) {
    writeFileSync(filePath, JSON.stringify(userList, null, 2));
  }

  static login(loginData: ILoginData) {
    const userData = this.getAllUsers()
      .find(user => user.login === loginData.login && user.password === loginData.password);
    return User.dataToUser(userData);
  }

  static getUserBySessionKey(sessionKey?: string) {
    if(!sessionKey) {
      return null;
    }
    const userData = this.getAllUsers().find(user => user.sessionKeys.includes(sessionKey));
    return User.dataToUser(userData);
  }

  static dataToUser(data) {
    return data && new User(data);
  }

  addSessionKey(sessionKey) {
    this.sessionKeys.push(sessionKey);
    User.updateUser(this);
  }
  removeSessionKey(sessionKey) {
    const {sessionKeys} = this;
    const ind = sessionKeys.indexOf(sessionKey);
    sessionKeys.splice(ind, 1);

    User.updateUser(this);
  }
}


export const UserRouter = express.Router();

UserRouter.get('/logged-in-user', (req, res) => {
  res.json(User.loggedInUser);
});

UserRouter.post('/login', (req, res) => {
  const user = User.login(req.body);

  if(!user) {
    res.cookie('sessionKey', '');
    return res.status(404).end();
  }

  const sessionKey = createGUID();
  res.cookie('sessionKey', sessionKey, {maxAge: new Date(2024, 0, 1), httpOnly: true});
  user.addSessionKey(sessionKey);

  res.json(User.clearPrivateInfo(user));
});

UserRouter.get('/logout', (req, res) => {
  const {sessionKey} = req.cookies;
  const loggedInUser = User.loggedInUser;

  loggedInUser && loggedInUser.removeSessionKey(sessionKey);

  res.cookie('sessionKey', '');

  res.json(null);
});

UserRouter.get('/history', (req, res) => {
  res.json(Order.getUserOrderHistory());
});

// create user
UserRouter.post('/', (req, res) => {
  res.json(User.createUser(req.body));
});
