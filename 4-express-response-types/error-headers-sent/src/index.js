const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/new-user', (req, res) => {
  console.log(`¿Has the response been sent? ${res.headersSent}`);
  if (req.query.name === undefined) {
    res.json({ result: 'invalid name' });
  }

  console.log(`¿Has the response been sent? ${res.headersSent}`);
  if (req.query.email === undefined) {
    res.json({ result: 'invalid email' });
  }
});
