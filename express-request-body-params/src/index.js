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

app.post('/new-user', (req, res) => {
  console.log('Body params:', req.body);
  console.log('Body param userName:', req.body.userName);
  console.log('Body param userEmail:', req.body.userEmail);

  res.json({
    result: 'User created'
  });
});

// express static server

app.use(express.static('./public'));
