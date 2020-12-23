const path = require('path');
const express = require('express');
const app = express();

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get('/response-with-json', (req, res) => {
  res.json({ result: 'Esto es un JSON' });
});

app.get('/redirect-to-adalab', (req, res) => {
  res.redirect('https://adalab.es');
});

app.get('/response-with-file', (req, res) => {
  res.sendFile(__dirname + '/assets/nodejs.jpg');
});

app.get('/download-a-file', (req, res) => {
  res.download(__dirname + '/assets/nodejs.jpg', 'logo.jpg');
});

app.get('/response-with-html', (req, res) => {
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" />
      </head>
      <body class="page">
        <header>
          <h1>Express: Respondiendo con un HTML</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get('/response-with-404-status-error', (req, res) => {
  // more info about http status codes: https://developer.mozilla.org/es/docs/Web/HTTP/Status
  res.status(404).json({
    errorCode: 'data-not-found',
    errorMessage: 'Data not found'
  });
  // another way to do it is:
  // res.status(404);
  // res.json({
  //   errorCode: 'data-not-found',
  //   errorMessage: 'Data not found'
  // });
});

app.get('/response-twice', (req, res) => {
  res.json({ result: 'first response' });
  res.json({ result: 'second response' });
});
