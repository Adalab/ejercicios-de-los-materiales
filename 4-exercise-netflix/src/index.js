const express = require('express');
const cors = require('cors');

// data
const movies = require('./data/movies.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', (req, res) => {
  res.json({
    success: true,
    movies: movies
  });
});

// config express static server
const staticServerPath = './public-react'; // relative to the root of the project
app.use(express.static(staticServerPath));
