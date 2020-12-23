const express = require('express');
const cors = require('cors');
const usersData = require('./data.json');

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// set custom middleware
const getUserRol = (req, res, next) => {
  // find user in users data
  const foundUser = usersData.find(user => user.id === req.headers.userid);
  // set userRol in req
  if (foundUser) {
    req.userRol = foundUser.rol;
  } else {
    req.userRol = 'anonymous';
  }
  // important: if we do not execute next(), the request does not continue
  // and it gets stuck here
  next();
};
app.use(getUserRol);

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.put('/posts/:postId/', (req, res) => {
  // get userRol from req
  if (req.userRol === 'admin' || req.userRol === 'editor') {
    // here we would change the article in the database
    res.json({ result: 'ok, the post has been changed' });
  } else {
    res.status(403).json({
      errorMessage: 'forbidden, you are not admin or editor'
    });
  }
});

app.delete('/posts/:postId', (req, res) => {
  // get userRol from req
  if (req.userRol === 'admin') {
    // here we would delete the article from the database
    res.json({ result: 'ok, the post has been deleted' });
  } else {
    res.status(403).json({
      errorMessage: 'forbidden, you are not admin'
    });
  }
});
