const express = require('express');
const cors = require('cors');
const fs = require('fs');
const promosData = require('./data.json');

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

// endpoints

app.get('/promo/:promoId', (req, res) => {
  // get promo data
  const promoData = promosData.find(promo => promo.id === req.params.promoId);
  console.log('Promo data', promoData);

  // get template html code
  const templatePath = './src/promo.tpl.html';
  fs.readFile(templatePath, 'utf8', (err, templateContent) => {
    // check readFile error
    if (err) {
      res.status(500).send('Se ha producido un error');
    } else {
      // replace template data by promo data
      console.log('Template content', templateContent);
      const renderTemplateCode = templateContent
        .replace('{{promoLetter}}', promoData.promo)
        .replace('{{promoName}}', promoData.name);
      console.log('Rendered content', renderTemplateCode);

      // response with rendered template
      res.send(renderTemplateCode);
    }
  });
});
