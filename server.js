const express = require('express');
const catalog = require('./catalog.js');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/catalog', (req, res) => {
  res.json(catalog);
});

server.get('/catalog/:id', (req, res) => {
  const { id } = req.params;
  const product = catalog.find((item) => item.id === +id);
  res.json(product);
});

server.listen(3005, () => {
  console.log('server is running');
});
