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

app.delete('/delete', (req, res) => {
  const query = db.prepare(`DELETE FROM users WHERE id = ?`);
  const result = query.run(5);
  res.json(result);
});

app.delete('/delete-with-body-params', (req, res) => {
  const query = db.prepare(`DELETE FROM users WHERE id = ?`);
  const result = query.run(req.body.id);
  console.log(result);
  if (result.changes === 1) {
    res.json({
      result: 'User deleted'
    });
  } else {
    res.status(404).json({
      result: 'User not found'
    });
  }
});
