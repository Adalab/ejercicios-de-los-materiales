const express = require('express');
const cors = require('cors');

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

// api endpoints

app.get('/new-user', (req, res) => {
  console.log('Header params:', req.headers); // case insensitive
  console.log('Header param userName:', req.headers.username);
  console.log('Header param userEmail:', req.headers.useremail);

  res.header('foo', 123);

  res.json({
    result: 'User created'
  });
});

// express static server

app.use(express.static('./public'));
