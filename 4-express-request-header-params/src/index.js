const express = require('express');
const cors = require('cors');

// create server
const server = express();

// set express middleware
server.use(express.json());
server.use(cors());

// init express aplication
const serverPort = 3000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// static server
const staticServerPath = './public';
server.use(express.static(staticServerPath));

// api endpoints

server.post('/user', (req, res) => {
  console.log('Header param unparametroenlacabecera:', req.headers.unparametroenlacabecera);
  console.log('Header param unparametroenlacabecera:', req.header('unparametroenlacabecera'));
  console.log(
    'Header param otro-parametro-de-la-cabecera:',
    req.headers['otro-parametro-de-la-cabecera']
  );
  console.log(
    'Header param otro-parametro-de-la-cabecera:',
    req.header('otro-parametro-de-la-cabecera')
  );
  console.log('Header param user-agent:', req.header('user-agent'));
  console.log('Todos los header params:', req.headers);

  res.json({
    result: 'User created'
  });
});
