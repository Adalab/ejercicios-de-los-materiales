const express = require('express');
const cors = require('cors');
const usersData = require('./data.json');

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// set custom middleware
app.use((req, res, next) => {
  req.extraData = '123';
  res.superInfo = { foo: '123' };
  console.log('This runs before endpoint');
  next();
});

// endpoints
app.get('/users', (req, res, next) => {
  console.log('Extra data', req.extraData);
  res.json({ result: 'ok' });
  next();
});

// set custom middleware
app.use((req, res, next) => {
  console.log('This runs after endpoint');
  console.log('Super info', res.superInfo);
  next();
});
