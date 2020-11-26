const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    result: 'Hello World!'
  });
});

app.get('/users', (req, res) => {
  res.json({
    users: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ],
    result: 'ok'
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
