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

app.get('/all-users-with-id-great-than-5/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id > ?`);
  const users = query.all(5);
  res.json(users);
});

app.get('/user-2/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const user = query.get(2);
  res.json(user);
});

app.get('/users-with-id-in-query-params/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE id = ?`);
  const users = query.get(req.query.userId);
  res.json(users);
});

app.get('/all-users-with-email-and-password/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE email = ? AND password = ?`);
  const users = query.get('tania@gmail.com', 'adfs089df');
  res.json(users);
});

app.get('/all-users-with-email-and-password-in-query-params/all-fields', (req, res) => {
  const query = db.prepare(`SELECT * FROM users WHERE email = ? AND password = ?`);
  const users = query.get(req.query.email, req.query.password);
  res.json(users);
});
