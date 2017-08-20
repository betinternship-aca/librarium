import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import * as express from 'express';
import {join} from 'path';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import {ApiRouter} from './server-api/';
import {User} from './server-api/user';
import {Organization} from './server-api/organization';

const PORT = process.env.PORT || 4300;

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  const sessionKey = req.cookies.sessionKey;
  const loggedInUser = User.getUserBySessionKey(sessionKey);

  req.loggedInUser = User.loggedInUser = loggedInUser;

  if(!loggedInUser) {
    res.cookie('sessionKey', '');
  }
  next();
});

app.use((req, res, next) => {
  const {orgSessionKey} = req.cookies;
  const loggedInOrg = Organization.getOrgBySessionKey(orgSessionKey);

  req.loggedInOrg = Organization.loggedInOrg = loggedInOrg;

  if(!loggedInOrg) {
    res.cookie('orgSessionKey', '');
  }

  next();
});



const dist = join(__dirname, '..', 'dist');
const indexPath = join(dist, 'index.html');

app.use(express.static(dist));
app.use('/api', ApiRouter);

app.get('*', (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
