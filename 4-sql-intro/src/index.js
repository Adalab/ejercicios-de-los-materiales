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

// static server
const staticServerPath = './public';
app.use(express.static(staticServerPath));

// init and config data base
const db = new Database('./src/database.db', {
  // comment next line to hide data base logs in console
  verbose: console.log
});

// api endpoints

app.post('/user', (req, res) => {
  // get current date
  const date = new Date().toISOString();
  // add user to data base
  const query = db.prepare(`INSERT INTO users (createdAt, email, password) VALUES(?, ?, ?)`);
  // run query
  console.log(req.body);
  const queryResult = query.run(
    // add date
    date,
    // add email in lowercase
    req.body.email.toLowerCase(),
    // add password
    req.body.password
  );
  // response
  res.json({
    result: 'User created',
    userId: queryResult.lastInsertRowid
  });
});
