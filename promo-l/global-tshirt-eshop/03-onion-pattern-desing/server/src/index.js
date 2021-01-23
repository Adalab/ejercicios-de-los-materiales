const cors = require('cors');
const express = require('express');
const apiCarts = require('./api/carts');
const apiProducts = require('./api/products');
const apiUsers = require('./api/users');
const data = require('./data/');

console.clear();

// DATA BASE

data.init();

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

app.post('/api/login', apiUsers.login);
app.get('/api/user', apiUsers.getUser);
app.get('/api/cart', apiCarts.getUserCart);
app.post('/api/cart', apiCarts.updateUserCart);
app.get('/api/products', apiProducts.getProducts);

// static server

app.use(express.static('./public'));
