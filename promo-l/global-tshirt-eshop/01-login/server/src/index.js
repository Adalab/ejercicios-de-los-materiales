const cors = require('cors');
const express = require('express');

// data

const usersData = require('./data/users.json');
console.log(usersData);

// SERVER

// config server
const app = express();
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api

app.post('/api/login', (req, res) => {
  const userFound = usersData.find(
    user => user.email === req.body.email && user.password === req.body.password
  );

  if (userFound) {
    res.json({
      error: false,
      userId: userFound.id
    });
  } else {
    res.status(404).json({
      error: 'user-not-found',
      message: 'User not found'
    });
  }

  console.log(userFound);
});
