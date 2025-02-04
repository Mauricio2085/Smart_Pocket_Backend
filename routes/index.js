const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const router = express.Router();

const routersApi = (app) => {
  app.use('/api/v1', router);
  router.use('/productos/product-detail', productsRouter);
  router.use('/categorias', categoriesRouter);
  router.use('/', (req, res) => {
    res.send('Hola soy la raiz');
  });
};

module.exports = routersApi;
