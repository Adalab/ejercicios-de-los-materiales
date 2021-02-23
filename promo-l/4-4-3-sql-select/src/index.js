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

app.get('/all-users/id-and-email-fields', (req, res) => {
  const query = db.prepare(`SELECT id, email FROM users`);
  const users = query.all();
  res.json(users);
});

app.get('/all-users/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users`);
  const users = query.all();
  res.json(users);
});

app.get('/users-great-or-equal-than-id-2/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id >= ?`);
  const users = query.all(2);
  res.json(users);
});

app.get('/all-users/all-fields/order-by-name-by-default', (req, res) => {
  const query = db.prepare(`SELECT * FROM users ORDER BY name`);
  const users = query.all();
  res.json(users);
});

app.get('/all-users/all-fields/order-by-name-asc', (req, res) => {
  const query = db.prepare(`SELECT * FROM users ORDER BY name ASC`);
  const users = query.all();
  res.json(users);
});

app.get('/all-users/all-fields/order-by-name-des', (req, res) => {
  const query = db.prepare(`SELECT * FROM users ORDER BY name DESC`);
  const users = query.all();
  res.json(users);
});

app.get('/all-users/all-fields/limit-2', (req, res) => {
  const query = db.prepare(`SELECT * FROM users LIMIT 2`);
  const users = query.all();
  res.json(users);
});

app.get('/users-great-or-equal-than-id-2/all-fields/limit-2', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id >= ? LIMIT 2`);
  const users = query.all(2);
  res.json(users);
});

app.get('/user-2/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const user = query.get(2);
  res.json(user);
});

app.get('/user-2/id-and-email', (req, res) => {
  const query = db.prepare(`SELECT id, email FROM users WHERE id = ?`);
  const user = query.get(2);
  res.json(user);
});
