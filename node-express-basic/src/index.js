const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
//   we must always put these lines, until we know what they do
//   more info: https://expressjs.com/es/guide/using-middleware.html
app.use(cors());
app.use(express.json());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// STATIC SERVER: listen files in public folder
const staticServerPath = './public'; // relative to the root of the project
app.use(express.static(staticServerPath));

// API: listen fetch requests

// API request > GET > http://localhost:3000/users
app.get('/users', (req, res) => {
  const response = {
    users: [{ name: 'Sofía' }, { name: 'María' }]
  };
  res.json(response);
});

// API request > POST > http://localhost:3000/new-user
app.post('/new-user', (req, res) => {
  // console request body params
  console.log(`Creating the user in database with user name: "${req.body.userName}"`);
  const response = {
    result: `User created: ${req.body.userName}`
  };
  res.json(response);
});
