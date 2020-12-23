const express = require('express');
const cors = require('cors');
const promos = require('./data.json');

// create app server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// api endpoints

app.get('/promos/all', (req, res) => {
  res.json(promos);
});

app.get('/promos/:promoId', (req, res) => {
  console.log('Url params:', req.params);
  console.log('Url param promoId:', req.params.promoId);

  // find promo by promoId
  const promo = promos.find(promo => promo.id === req.params.promoId);
  console.log('Found promo:', promo);

  // response with selected promo data or error
  if (promo === undefined) {
    res.json({ error: 'promo-not-found' });
  } else {
    res.json(promo);
  }
});

// express static server

app.use(express.static('./public'));
