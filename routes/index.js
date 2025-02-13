const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const searchRouter = require('./search.router');
const whatsappRouter = require('./whatsapp.router');
const databaseTest = require('./databaseTest.router');
const router = express.Router();

const routersApi = (app) => {
  app.use('/api/v1', router);
  router.use('/productos', productsRouter);
  router.use('/categorias', categoriesRouter);
  router.use('/search', searchRouter);
  router.use('/whatsapp-number', whatsappRouter);
  router.use('/dbTest', databaseTest);
  router.use('/', (req, res) => {
    res.send('Hola soy la raiz');
  });
};

module.exports = routersApi;
