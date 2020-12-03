const path = require('path');
const express = require('express');
const app = express();

// api endpoints

app.get('/users', (req, res) => {
  res.json({
    result: 'Hello World!'
  });
});

// express static server

const staticServerPath = './public'; // relative to the root of the project
app.use(express.static(staticServerPath));

// not found error

app.get('*', (req, res) => {
  const notFoundFileRelativePath = '../public/404.html'; // relative to this directory
  const notFoundFileAbsolutePath = path.join(__dirname, notFoundFileRelativePath);
  res.status(404).sendFile(notFoundFileAbsolutePath);
});

// init express server

const serverPort = 3000;

app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
