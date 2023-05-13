const express = require('express');
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const router = express.Router();


const routersApi = (app) => {
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
}


module.exports = routersApi;