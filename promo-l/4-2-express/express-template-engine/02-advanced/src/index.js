const express = require('express');
const cors = require('cors');
const promosData = require('./data.json');

// create app server
const app = express();

// set express middlewares
app.use(express.json());
app.use(cors());

// set template engine middlewares
app.set('view engine', 'ejs');
// more info about ejs: https://ejs.co/

// init express aplication
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints

app.get('/promo/:promoId', (req, res) => {
  // get promo data
  const promoData = promosData.find(promo => promo.id === req.params.promoId);
  console.log('Promo data', promoData);

  // ensure data
  promoData.name = promoData.name || '';
  promoData.letter = promoData.letter || '';
  promoData.students = promoData.students || [];
  console.log('Ensured promo data', promoData);

  // response with rendered template
  res.render('pages/promo', promoData);
});
