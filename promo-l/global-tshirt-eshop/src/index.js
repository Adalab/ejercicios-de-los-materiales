const cors = require('cors');
const express = require('express');
const path = require('path');
const carts = require('./data/carts.json');
const products = require('./data/products.json');
const users = require('./data/users.json');

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

// API

app.post('/api/login', (req, res) => {
  const foundUser = users.find(
    user => user.email === req.body.email && user.password === req.body.password
  );
  if (foundUser) {
    res.json({ userId: foundUser.id });
  } else {
    res.status(404).json({
      error: 404,
      errorCode: 'user-not-found',
      message: 'User not found'
    });
  }
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post('/api/cart', (req, res) => {
  res.json(products);
});

// STATIC SERVER

const staticServerPath = './public'; // relative to the root of the project
app.use(express.static(staticServerPath));

// not found error
app.get('*', (req, res) => {
  res.status(404).redirect('./index.html#not-found');
});
