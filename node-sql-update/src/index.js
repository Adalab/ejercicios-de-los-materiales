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

app.patch('/users', (req, res) => {
  const query = db.prepare(`UPDATE users SET email = ?, password = ? WHERE id = ?`);
  const result = query.run('sofia.garcia@yahoo.com', 'abcdefgh', 3);
  res.json(result);
});

app.patch('/users-with-body-params', (req, res) => {
  const query = db.prepare(`UPDATE users SET email = ?, password = ? WHERE id = ?`);
  const result = query.run(req.body.email, req.body.password, req.body.id);
  res.json(result);
});
