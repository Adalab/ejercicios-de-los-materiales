const express = require('express');
const cors = require('cors');
const fakeDataBase = require('./fake-data-base');

// clear console on start this app
console.clear();

// create app server
const app = express();

// set express middleware
//   we must always put these two lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints

// listen GET > http://localhost:3000/
app.get('/', (req, res) => {
  // send response
  res.json({
    result: 'Hello World!'
  });
});

// listen GET > http://localhost:3000/users
app.get('/users', (req, res) => {
  // get fake data base users
  const users = fakeDataBase.getUsers();

  // send response
  res.json({
    result: 'ok',
    users: users
  });
});

// listen POST > http://localhost:3000/new-user
app.post('/new-user', (req, res) => {
  // console request body params
  console.log(`Creating the user in database with user name: "${req.body.userName}"`);

  // add user to fake data base
  fakeDataBase.addNewUser(req.body.userName);

  // send response
  res.json({
    result: 'ok'
  });
});
