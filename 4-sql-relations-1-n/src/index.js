const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// init and config data base
const db = new Database('./src/database.db', {
  // this line log in console all data base queries
  verbose: console.log
});

// api endpoints

app.post('/users', (req, res) => {
  const query = db.prepare(`SELECT id FROM users WHERE email = ? AND password = ?`);
  const result = query.get(req.body.email, req.body.password);
  res.json({
    userId: result.id
  });
});

app.get('/users/:userId/addresses', (req, res) => {
  const query = db.prepare(`SELECT * FROM addresses WHERE userId = ?`);
  const result = query.all(req.params.userId);
  res.json(result);
});

app.post('/users/:userId/addresses/', (req, res) => {
  const query = db.prepare(
    `INSERT INTO addresses (userId, country, region, zipCode, street, number, floor) VALUES (?, ?, ?, ?, ?, ?, ?)`
  );
  const result = query.run(
    req.params.userId,
    req.body.country,
    req.body.region,
    req.body.zipCode,
    req.body.street,
    req.body.number,
    req.body.floor
  );
  res.json({
    result: 'Address created',
    addressId: result.lastInsertRowid
  });
});

app.post('/users/:userId/orders/', (req, res) => {
  const query = db.prepare(`INSERT INTO orders (userId, addressId) VALUES (?, ?)`);
  const result = query.run(req.params.userId, req.body.addressId);
  res.json({
    result: 'Order created',
    orderId: result.lastInsertRowid
  });
});
