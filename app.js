const express = require('express');
const controllers = require('./controllers');

const app = express();
const port = 3000;

app.use(controllers);

app.get('/', (req, res) => {
  res.send(`Transactional api listening on port: ${port}`);
});

app.listen(port, () => {
  console.log('Transactional api listening on port', port);
});
